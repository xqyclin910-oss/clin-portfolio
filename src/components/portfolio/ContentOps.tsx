'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const workflows = [
  {
    src: '/assets/photos/private-domain-sop.png',
    title: '私域话术SOP',
    titleEn: 'Private Domain SOP',
    desc: '私域运营标准化话术流程',
    descEn: 'Standardized scripts for private domain operations',
  },
  {
    src: '/assets/photos/kol-pipeline.png',
    title: 'KOL Pipeline',
    titleEn: 'KOL Pipeline',
    desc: '达人拓展管线与表现分析',
    descEn: 'Creator outreach pipeline and performance analytics',
  },
  {
    src: '/assets/photos/topic-collaboration.png',
    title: '选题协作表',
    titleEn: 'Topic Collaboration',
    desc: '跨团队选题头脑风暴与审批流程',
    descEn: 'Cross-team topic brainstorming and approval workflow',
  },
];

export function ContentOps() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 gradient-bar rounded-full" aria-hidden="true" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
          <span className="gradient-text">内容运营</span>
          <span className="text-foreground">体系</span>
        </h2>
        <p className="text-muted-foreground/60 italic text-center text-sm mb-1">
          Content Operations & Strategy
        </p>
        <p className="text-muted-foreground text-center text-sm mb-10">
          系统化工作流，驱动持续稳定的内容输出
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflows.map((item, i) => (
            <div
              key={item.src}
              className="hover-lift rounded-xl overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 100}ms`,
              }}
            >
              <div className="img-contain" style={{ minHeight: '180px' }}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 bg-card/60">
                <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-[10px] text-muted-foreground/60 italic">{item.titleEn}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                <p className="text-[10px] text-muted-foreground/50 italic">{item.descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
