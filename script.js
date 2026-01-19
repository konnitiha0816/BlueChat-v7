// 日本時間で現在時刻を取得
function getJapanHour() {
  const now = new Date();
  const utcHour = now.getUTCHours();
  return (utcHour + 9) % 24;
}

const hour = getJapanHour();

// 昼と夜の背景URL（フリー画像）
const dayBackground =
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470";
const nightBackground =
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3";

// 時間帯で背景切り替え
if (hour >= 5 && hour < 17) {
  document.body.style.backgroundImage = `url(${dayBackground})`;
} else {
  document.body.style.backgroundImage = `url(${nightBackground})`;
}
