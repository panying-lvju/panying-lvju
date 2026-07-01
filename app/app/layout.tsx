import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "盘鹰旅居 | 稳妥的旅居生活方案",
    template: "%s | 盘鹰旅居",
  },
  description:
    "盘鹰旅居，专注旅居生活、基地入住与长期居住方案。页面信息务实清晰，适合咨询、对比和预约沟通。",
  keywords: [
    "盘鹰旅居",
    "旅居",
    "长期居住",
    "基地入住",
    "居住方案",
    "联络我们",
  ],
  metadataBase: new URL("https://panyinglvju.com"),
  alternates: {
    canonical: "https://panyinglvju.com",
  },
  openGraph: {
    title: "盘鹰旅居",
    description: "稳妥的旅居生活方案",
    url: "https://panyinglvju.com",
    siteName: "盘鹰旅居",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "盘鹰旅居",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "盘鹰旅居",
    description: "稳妥的旅居生活方案",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
