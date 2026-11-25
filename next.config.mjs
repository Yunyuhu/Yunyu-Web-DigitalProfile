/** @type {import('next').NextConfig} */
const nextConfig = {
  // 水母與蜥蜴機器人合併成一個專案後，舊網址轉到新頁
  async redirects() {
    return [
      { source: "/projects/jellyfish-robot", destination: "/projects/jellyfish-lizard-robots", permanent: true },
      { source: "/projects/lizard-robot", destination: "/projects/jellyfish-lizard-robots", permanent: true },
    ];
  },
};

export default nextConfig;
