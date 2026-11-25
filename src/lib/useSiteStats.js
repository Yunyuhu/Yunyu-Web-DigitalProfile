import { useEffect, useState } from "react";

// 讀 /api/stats 的流量數字；同一次造訪只抓一次，側欄與專案卡片共用。抓不到時是空物件，畫面就不顯示數字
let request;

export default function useSiteStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    request ??= fetch("/api/stats")
      .then((res) => (res.ok ? res.json() : {}))
      .catch(() => ({}));
    let alive = true;
    request.then((data) => alive && setStats(data));
    return () => {
      alive = false;
    };
  }, []);

  return stats;
}
