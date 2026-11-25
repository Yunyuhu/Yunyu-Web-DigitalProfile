import { ga4Report } from "@/lib/ga4Data";

// 網站上顯示的流量數字：累計訪客，以及各專案被點進去的次數（專案列表、上一個／下一個、其他專案等所有入口加總）。
// 結果快取 30 分鐘，期間所有訪客共用同一份，不會每次都去查 GA4。兩份報表各自查，一份失敗另一份照樣顯示。
// 讀不到時 status 說明原因（不含機密），網站就不顯示那部分數字：
// hidden（在 Vercel 設了 SHOW_SITE_STATS=0，設定後要重新部署）、not_configured（環境變數沒設定）、
// bad_credentials（金鑰內容不完整）、token_failed_*（金鑰換不到權杖）、report_failed_*（GA4 拒絕查詢，常見是權限或資源 ID 不對）
export const dynamic = "force-static";
export const revalidate = 1800;

const SINCE = "2026-10-27"; // 網站開始裝 GA4 的日子

export async function GET() {
  if (process.env.SHOW_SITE_STATS === "0") return Response.json({ status: "hidden" });
  try {
    const report = await ga4Report();
    if (!report) return Response.json({ status: "not_configured" });
    const dateRanges = [{ startDate: SINCE, endDate: "today" }];
    const [users, items] = await Promise.allSettled([
      report({ dateRanges, metrics: [{ name: "totalUsers" }] }),
      report({ dateRanges, dimensions: [{ name: "itemId" }], metrics: [{ name: "itemsClickedInList" }], limit: 100 }),
    ]);
    const stats = {};
    if (users.status === "fulfilled") stats.visitors = Number(users.value.rows?.[0]?.metricValues[0].value ?? 0);
    if (items.status === "fulfilled") {
      stats.clicks = {};
      for (const row of items.value.rows ?? []) {
        const count = Number(row.metricValues[0].value);
        if (count > 0) stats.clicks[row.dimensionValues[0].value] = count;
      }
    }
    const failed = [users, items].find((result) => result.status === "rejected");
    if (failed) {
      console.error(failed.reason);
      stats.status = failed.reason.step ?? "unknown";
    }
    return Response.json(stats);
  } catch (error) {
    console.error(error);
    return Response.json({ status: error.step ?? "unknown" });
  }
}
