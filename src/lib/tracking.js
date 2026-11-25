// 專案的 GA4 紀錄：把專案卡片當成「清單裡的商品」，用 GA4 電子商務的兩個事件記錄，
// GA4 就會分專案統計「在專案列表被看到幾次」（view_item_list）與「被點了幾次」（select_item）。
// item_list_id 記的是從哪裡點進去（專案列表為 projects）；網站卡片上的點擊次數把所有來源加總。
// GA4 沒載入（本機開發、預覽網址、本人排除）時不會送出，呼叫這裡也不會出錯

export const PROJECT_LIST = "projects";

// 從 /projects/<slug> 取出專案代號；專案列表本身（/projects）不算
export const projectSlugFromPath = (path) => path?.match(/^\/projects\/([^/?#]+)/)?.[1] ?? null;

export const trackProjectImpressions = (items) =>
  window.gtag?.("event", "view_item_list", {
    item_list_id: PROJECT_LIST,
    item_list_name: PROJECT_LIST,
    items: items.map(({ slug, index }) => ({ item_id: slug, index })),
  });

export const trackProjectClick = (slug, source) =>
  window.gtag?.("event", "select_item", {
    item_list_id: source,
    item_list_name: source,
    items: [{ item_id: slug }],
  });
