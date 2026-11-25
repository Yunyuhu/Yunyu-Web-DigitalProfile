import { createSign } from "node:crypto";

// 伺服器端向 GA4 Data API 讀數字：用唯讀的服務帳戶換存取權杖，再查報表。只能在伺服器端使用，金鑰不會送到瀏覽器。
// 需要兩個 Vercel 環境變數：GA_PROPERTY_ID（GA4 資源編號，純數字）、GA_SERVICE_ACCOUNT（服務帳戶金鑰 JSON 檔的完整內容）

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";

const base64url = (value) => Buffer.from(value).toString("base64url");

// 失敗時的錯誤帶有 step，說明卡在哪一步（不含機密），/api/stats 會回傳它，方便從網址直接檢查
const fail = (step, detail) => Object.assign(new Error(`GA4 ${step}: ${detail}`), { step });

async function accessToken({ client_email, private_key }) {
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64url(JSON.stringify({ iss: client_email, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 }));
  const signature = createSign("RSA-SHA256").update(`${header}.${claims}`).sign(private_key, "base64url");
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${header}.${claims}.${signature}` }),
    cache: "no-store",
  });
  if (!res.ok) throw fail(`token_failed_${res.status}`, await res.text());
  return (await res.json()).access_token;
}

// 回傳查報表的函式（參數是 runReport 的請求內容）；環境變數沒設定時回傳 null
export async function ga4Report() {
  const propertyId = process.env.GA_PROPERTY_ID;
  const serviceAccount = process.env.GA_SERVICE_ACCOUNT;
  if (!propertyId || !serviceAccount) return null;
  let credentials;
  try {
    credentials = JSON.parse(serviceAccount);
  } catch {
    throw fail("bad_credentials", "GA_SERVICE_ACCOUNT 不是完整的 JSON");
  }
  if (!credentials.client_email || !credentials.private_key) throw fail("bad_credentials", "金鑰 JSON 缺少 client_email 或 private_key");
  const token = await accessToken(credentials);
  return async (body) => {
    const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propertyId.trim()}:runReport`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    if (!res.ok) throw fail(`report_failed_${res.status}`, await res.text());
    return res.json();
  };
}
