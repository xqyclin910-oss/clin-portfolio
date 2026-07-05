'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const workflows = [
  {
    src: '/assets/photos/content-topic-flow.png',
    title: 'Topic Planning',
    desc: 'Cross-team topic brainstorming and approval workflow',
  },
  {
    src: '/assets/photos/content-workflow.png',
    title: 'Content Pipeline',
    desc: 'End-to-end content production tracking system',
  },
  {
    src: '/assets/photos/livestream-sop.png',
    title: 'Livestream SOP',
    desc: 'Standardized live commerce operation procedures',
  },
  {
    src: '/assets/photos/influencer-tracker.png',
    title: 'Influencer Tracker',
    desc: 'Creator outreach pipeline and performance analytics',
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          <span className="gradient-text">Content Operations</span>{' '}
          <span className="text-foreground">& Strategy</span>
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-10">
          Systematic workflows that power consistent content output
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
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
