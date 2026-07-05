import type { Metadata } from 'next';
import {
  Navigation,
  Hero,
  StatsCard,
  Philosophy,
  ProjectGallery,
  Experts,
  BlogSection,
  TestimonialsWall,
  Contact,
  Experience,
  FunSection,
} from '@/components/portfolio';

export const metadata: Metadata = {
  title: '谢秋阳 - 海外内容营销与社媒增长 | 个人作品集',
  description: '谢秋阳，5年内容与增长经验。Win with Great Content。33账号285万海外粉丝，9个月从0自然流起号。',
  keywords: ['海外内容营销', '社媒增长', 'TikTok运营', 'Instagram运营', '内容策略', '谢秋阳'],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 顶部导航栏 */}
      <Navigation />
      
      {/* Hero 区域 */}
      <Hero />
      
      {/* 核心数据卡片 */}
      <StatsCard />
      
      {/* 散文/理念板块 */}
      <section id="philosophy">
        <Philosophy />
      </section>
      
      {/* 项目作品展示 */}
      <section id="products">
        <ProjectGallery />
      </section>
      
      {/* 合作专家 */}
      <section id="experts">
        <Experts />
      </section>
      
      {/* 博客文章区 */}
      <section id="blog">
        <BlogSection />
      </section>
      
      {/* 学员案例照片墙 */}
      <section id="testimonials">
        <TestimonialsWall />
      </section>
      
      {/* 联系方式 */}
      <section id="contact">
        <Contact />
      </section>
      
      {/* 职业经历 */}
      <section id="experience">
        <Experience />
      </section>
      
      {/* 有趣的入口 */}
      <FunSection />
      
      {/* 页脚 */}
      <footer className="px-6 py-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 谢秋阳 · 海外内容营销作品集</p>
        </div>
      </footer>
    </main>
  );
}