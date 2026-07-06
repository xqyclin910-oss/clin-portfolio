'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const highlights = [
  { icon: '🌐', text: '285万+粉丝矩阵操盘' },
  { icon: '🎬', text: '4大社媒起号SOP沉淀' },
  { icon: '🌍', text: '20人中美跨文化团队管理' },
  { icon: '🛒', text: 'DTC独立站从0到1落地' },
  { icon: '🎓', text: '香港理工大学 QS54 硕士' },
  { icon: '🏆', text: 'PMP认证 | 雅思7.5 | 英语专八' },
];

export default function About() {
  const { ref: sectionRef, isVisible } = useInView<HTMLDivElement>(0.1);

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#0a1120] to-[#050a14]" />
      
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="relative max-w-[1400px] mx-auto px-6 md:px-10"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Left: Portrait Photo */}
          <div className="relative flex-shrink-0">
            {/* Subtle gradient border */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#00d4ff]/40 via-[#00ff88]/30 to-[#00d4ff]/40 opacity-60" />
            <div className="relative w-[240px] md:w-[280px] rounded-2xl overflow-hidden border border-[#00d4ff]/20 bg-[#050a14]">
              <Image
                src="/assets/photos/portrait.jpg"
                alt="XIE Qiuyang - 谢秋阳"
                width={280}
                height={350}
                className="w-full h-auto object-contain"
                sizes="280px"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Name */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              谢秋阳 <span className="text-[#00d4ff]">XIE Qiuyang</span>
            </h2>

            {/* Tags with gradient */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
              {['海外社媒策略', '内容增长', 'IP孵化操盘手'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#00ff88]/20 border border-[#00d4ff]/30 text-[#00d4ff]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bio - Chinese */}
            <p className="text-gray-300 text-base leading-relaxed mb-2">
              9个月自然流构建285万+粉丝社媒矩阵，主导33账号从0到1全链路运营。擅长IP孵化、内容策略、达人增长与DTC独立站。曾管理20人中美跨文化团队，沉淀4大社媒起号SOP。
            </p>

            {/* Bio - English */}
            <p className="text-gray-400 text-sm italic leading-relaxed mb-6">
              Built a 2.85M+ follower social media matrix organically in 9 months. Led full-stack operations of 33 accounts from 0 to 1. Expertise in creator incubation, content strategy, creator growth, and DTC e-commerce. Managed a 20-person cross-cultural US-China team.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0a1120]/80 border border-[#00d4ff]/10 hover:border-[#00d4ff]/30 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
