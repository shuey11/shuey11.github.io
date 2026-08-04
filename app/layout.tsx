import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宁舒依 Ning Shuyi｜软件工程与互动媒体开发者",
  description:
    "宁舒依的个人作品集，展示软件开发、移动应用、后端系统、VR交互、3D内容与互动媒体项目。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

