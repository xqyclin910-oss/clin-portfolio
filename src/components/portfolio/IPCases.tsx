'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const cases = [
  {
    name: 'Long Jiaoer',
    period: '9 months',
    totalFans: '1.1M',
    platforms: [
      { name: 'YouTube', fans: '332K' },
      { name: 'Instagram', fans: '250K' },
      { name: 'Facebook', fans: '288K' },
      { name: 'TikTok', fans: '101K' },
    ],
    image: '/assets/photos/success-stories-1.png',
  },
  {
    name: 'Kyran',
    period: '4 months',
    totalFans: '800K',
    platforms: [
      { name: 'YouTube', fans: '187K' },
      { name: 'Instagram', fans: '136K' },
      { name: 'Facebook', fans: '245K' },
      { name: 'TikTok', fans: '89K' },
    ],
    image: '/assets/photos/success-stories-2.png',
  },
  {
    name: 'Qingyun',
    period: '8 months',
    totalFans: '1M',
    platforms: [
      { name: 'YouTube', fans: '254K' },
      { name: 'Instagram', fans: '300K' },
      { name: 'Facebook', fans: '111K' },
      { name: 'TikTok', fans: '95K' },
    ],
    image: '/assets/photos/content-topic-flow.png',
  },
];

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="dual-tone-card hover-lift rounded-xl bg-card/80 backdrop-blur-sm p-5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 150}ms`,
      }}
    >
      <div className="flex flex-col gap-4">
        {/* 案例信息 */}
        <div>
          <h3 className="text-lg font-bold text-foreground">{caseItem.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="text-primary">{caseItem.period}</span> to{' '}
            <span className="gradient-text font-bold">{caseItem.totalFans} fans</span>
          </p>
        </div>

        {/* 平台数据 */}
        <div className="grid grid-cols-2 gap-2">
          {caseItem.platforms.map((p) => (
            <div key={p.name} className="flex justify-between text-xs">
              <span className="text-muted-foreground">{p.name}</span>
              <span className="text-foreground font-medium">{p.fans}</span>
            </div>
          ))}
        </div>

        {/* 数据截图 */}
        <div className="img-contain aspect-[4/3]">
          <Image
            src={caseItem.image}
            alt={`${caseItem.name} data`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

export function IPCases() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
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
          <span className="gradient-text">Creator Incubation</span>{' '}
          <span className="text-foreground">Success Stories</span>
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-10">
          Building creator brands from zero to millions of followers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <CaseCard key={c.name} caseItem={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
