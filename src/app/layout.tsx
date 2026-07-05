import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '谢秋阳 - 海外内容营销与社媒增长 | 个人作品集',
  description: '谢秋阳，5年内容与增长经验。Win with Great Content。33账号285万海外粉丝，9个月从0自然流起号。',
  keywords: ['海外内容营销', '社媒增长', 'TikTok运营', 'Instagram运营', '内容策略', '谢秋阳'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
