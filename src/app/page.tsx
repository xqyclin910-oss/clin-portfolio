import type { Metadata } from 'next';
import {
  Hero,
  StatsCard,
  Philosophy,
  ProjectGallery,
  Experts,
  BlogSection,
  Contact,
  FunSection,
} from '@/components/portfolio';

export const metadata: Metadata = {
  title: '谢秋阳 - 课程产品经理 | 个人作品集',
  description: '谢秋阳，5年企业家课程产品设计经验。服务2000+企业主，产品年营收破亿。专注于好的学习促人改变。',
  keywords: ['课程产品经理', '企业家课程', '教育科技', '课程策划', '谢秋阳', '腾讯青腾'],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero 区域 */}
      <Hero />
      
      {/* 核心数据卡片 */}
      <StatsCard />
      
      {/* 散文/理念板块 */}
      <Philosophy />
      
      {/* 项目作品展示 */}
      <ProjectGallery />
      
      {/* 合作专家 */}
      <Experts />
      
      {/* 博客文章区 */}
      <BlogSection />
      
      {/* 联系方式 */}
      <Contact />
      
      {/* 有趣的入口 */}
      <FunSection />
      
      {/* 页脚 */}
      <footer className="px-6 py-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 谢秋阳 · 课程产品经理作品集</p>
        </div>
      </footer>
    </main>
  );
}