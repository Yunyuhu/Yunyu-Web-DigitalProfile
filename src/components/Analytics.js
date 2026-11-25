import Script from "next/script";

// Google Analytics 4：評估 ID 會出現在網頁原始碼，屬公開資訊；要換 ID 可設環境變數 NEXT_PUBLIC_GA_ID
// 只在正式網址載入，本機開發與 Vercel 的預覽網址都不計入；換頁由 GA4 的「依瀏覽器記錄變更網頁」自動記錄
// 排除本人：開一次任何頁面加上 ?notrack=1，這台瀏覽器之後都不記錄；?notrack=0 恢復
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-5LFP4FWF5J";
const IS_LIVE = process.env.NODE_ENV === "production" && (process.env.VERCEL_ENV ?? "production") === "production";

export default function Analytics() {
  if (!GA_ID || !IS_LIVE) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          try {
            var notrack = new URLSearchParams(location.search).get('notrack');
            if (notrack === '1') localStorage.setItem('ga-notrack', '1');
            if (notrack === '0') localStorage.removeItem('ga-notrack');
            if (localStorage.getItem('ga-notrack') === '1') window['ga-disable-${GA_ID}'] = true;
          } catch (e) {}
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
