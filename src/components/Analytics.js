import Script from "next/script";

// Google Analytics 4：評估 ID 會出現在網頁原始碼，屬公開資訊；要換 ID 可設環境變數 NEXT_PUBLIC_GA_ID
// 只在正式環境載入，本機開發的瀏覽不會計入；換頁由 GA4 的「依瀏覽器記錄變更網頁」自動記錄
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-5LFP4FWF5J";

export default function Analytics() {
  if (!GA_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
