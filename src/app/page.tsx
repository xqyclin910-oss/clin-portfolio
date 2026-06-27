import type { Metadata } from 'next';
import {
  Hero,
  StatsCard,
  Experience,
  ProjectGallery,
  BlogSection,
  Contact,
} from '@/components/portfolio';

export const metadata: Metadata = {
  title: '谢秋阳 - 课程产品经理 | 个人作品集',
  description: '谢秋阳，专注于课程内容策划与用户体验优化的课程产品经理，8年教育科技行业经验，致力于打造有温度、有深度的学习产品。',
  keywords: ['课程产品经理', '教育科技', '课程策划', '用户体验', '谢秋阳', '腾讯青腾'],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero 区域 */}
      <Hero />
      
      {/* 核心数据卡片 */}
      <StatsCard />
      
      {/* 职业经历 */}
      <Experience />
      
      {/* 项目作品照片墙 */}
      <ProjectGallery />
      
      {/* 博客文章区 */}
      <BlogSection />
      
      {/* 联系方式 */}
      <Contact />
      
      {/* 页脚 */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 谢秋阳 · 课程产品经理作品集</p>
        </div>
      </footer>
    </main>
  );
}