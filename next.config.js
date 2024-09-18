require("dotenv").config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    // .envファイルで定義された変数を参照し、ビルド時に利用可能にする
    API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
  images: {
    domains: [
      "thumb.ac-illust.com", // 既存のドメイン
      "storage.googleapis.com", // 追加するGoogle Cloud Storageのドメイン
    ],
  },
};

module.exports = nextConfig;
