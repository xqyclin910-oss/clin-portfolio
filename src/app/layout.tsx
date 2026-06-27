import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '谢秋阳 | 课程产品经理',
    template: '%s | 谢秋阳作品集',
  },
  description:
    '谢秋阳，专注于课程内容策划与用户体验优化的课程产品经理。8年教育科技行业经验，致力于打造有温度、有深度的学习产品。',
  keywords: [
    '课程产品经理',
    '教育科技',
    '课程策划',
    '用户体验',
    '谢秋阳',
    '腾讯青腾',
    '作品集',
  ],
  authors: [{ name: '谢秋阳' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}