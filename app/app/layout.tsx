import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "盘鹰旅居",
    template: "%s | 盘鹰旅居",
  },
  description: "盘鹰旅居官方网站，提供基地介绍、居住方案、服务说明与联系方式。",
  keywords: ["盘鹰旅居", "旅居", "基地介绍", "居住方案", "服务说明", "联系方式"],
  metadataBase: new URL("https://panyinglvju.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "盘鹰旅居",
    description: "盘鹰旅居官方网站，提供基地介绍、居住方案、服务说明与联系方式。",
    url: "https://panyinglvju.com",
    siteName: "盘鹰旅居",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
