'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const workflows = [
  {
    src: '/assets/photos/content-topic-flow.png',
    title: '选题协作表',
    titleEn: 'Topic Planning',
    desc: '跨团队选题头脑风暴与审批流程',
    descEn: 'Cross-team topic brainstorming and approval workflow',
  },
  {
    src: '/assets/photos/content-workflow.png',
    title: '内容生产管线',
    titleEn: 'Content Pipeline',
    desc: '端到端内容生产追踪系统',
    descEn: 'End-to-end content production tracking system',
  },
  {
    src: '/assets/photos/livestream-sop.png',
    title: '直播运营SOP',
    titleEn: 'Livestream SOP',
    desc: '标准化直播电商运营流程',
    descEn: 'Standardized live commerce operation procedures',
  },
  {
    src: '/assets/photos/influencer-tracker.png',
    title: '达人追踪表',
    titleEn: 'Influencer Tracker',
    desc: '达人拓展管线与表现分析',
    descEn: 'Creator outreach pipeline and performance analytics',
  },
];

export function ContentOps() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 gradient-bar rounded-full" aria-hidden="true" />

      <div
        ref={ref}
        className="max-w-6xl mx-auto"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div className="img-contain aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
