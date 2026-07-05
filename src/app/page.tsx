import type { Metadata } from 'next';
import {
  Hero,
  StatsBar,
  IPCases,
  VideoPortfolio,
  ContentOps,
  BehindScenes,
  DTCStore,
  Contact,
} from '@/components/portfolio';

export const metadata: Metadata = {
  title: '谢秋阳 | Content Strategist & Creator Growth',
  description:
    '5 years crafting social media strategies that built 2.85M+ followers across 33 accounts. Content strategy, creator incubation, and DTC e-commerce.',
  keywords: [
    'content strategy',
    'social media',
    'creator growth',
    'IP incubation',
    'DTC e-commerce',
    'video production',
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <IPCases />
      <VideoPortfolio />
      <ContentOps />
      <BehindScenes />
      <DTCStore />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/30">
        <p className="text-xs text-muted-foreground">
          Designed & Built by Katrina Xie
        </p>
      </footer>
    </main>
  );
}
