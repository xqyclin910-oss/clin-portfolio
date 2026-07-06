import type { Metadata } from 'next';
import {
  Hero,
  StatsBar,
  About,
  IPCases,
  VideoPortfolio,
  ContentOps,
  BehindScenes,
  DTCStore,
  Contact,
} from '@/components/portfolio';

export const metadata: Metadata = {
  title: '谢秋阳 Katrina Xie | 内容策略师 & 达人增长 Content Strategist & Creator Growth',
  description:
    '5年社媒内容策略经验，9个月内为33个账号构建285万+粉丝矩阵。内容策略、达人孵化、DTC电商。 | 5 years crafting social media strategies that built 2.85M+ followers across 33 accounts. Content strategy, creator incubation, and DTC e-commerce.',
  keywords: [
    'content strategy',
    'social media',
    'creator growth',
    'IP incubation',
    'DTC e-commerce',
    'video production',
    '内容策略',
    '社媒运营',
    '达人孵化',
    '海外社媒',
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <About />
      <IPCases />
      <VideoPortfolio />
      <ContentOps />
      <BehindScenes />
      <DTCStore />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/30">
        <p className="text-xs text-muted-foreground">
          设计与制作 by 谢秋阳 Katrina Xie
        </p>
        <p className="text-[10px] text-muted-foreground/50 italic mt-1">
          Designed & Built by Katrina Xie
        </p>
      </footer>
    </main>
  );
}
