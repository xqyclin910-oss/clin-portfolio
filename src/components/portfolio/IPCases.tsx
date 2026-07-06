'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const cases = [
  {
    name: '龙娇儿 Long Jiaoer',
    period: '9个月',
    periodEn: '9 months',
    totalFans: '110万',
    totalFansEn: '1.1M',
    platforms: [
      { name: 'YouTube', fans: '33.2万' },
      { name: 'Instagram', fans: '25万' },
      { name: 'Facebook', fans: '28.8万' },
      { name: 'TikTok', fans: '10.1万' },
    ],
    image: '/assets/photos/success-stories-1.png',
  },
  {
    name: '凯源 Kyran',
    period: '4个月',
    periodEn: '4 months',
    totalFans: '80万',
    totalFansEn: '800K',
    platforms: [
      { name: 'YouTube', fans: '18.7万' },
      { name: 'Instagram', fans: '13.6万' },
      { name: 'Facebook', fans: '24.5万' },
      { name: 'TikTok', fans: '8.9万' },
    ],
    image: '/assets/photos/success-stories-2.png',
  },
  {
    name: '清云 Qingyun',
    period: '8个月',
    periodEn: '8 months',
    totalFans: '100万',
    totalFansEn: '1M',
    platforms: [
      { name: 'YouTube', fans: '25.4万' },
      { name: 'Instagram', fans: '30万' },
      { name: 'Facebook', fans: '11.1万' },
      { name: 'TikTok', fans: '9.5万' },
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
            <span className="text-primary">{caseItem.period}</span>
            <span className="text-muted-foreground/60 italic text-xs ml-1">({caseItem.periodEn})</span>
            {' → '}
            <span className="gradient-text font-bold">{caseItem.totalFans} 粉丝</span>
            <span className="text-muted-foreground/60 italic text-xs ml-1">({caseItem.totalFansEn})</span>
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
          <span className="gradient-text">达人孵化</span>
          <span className="text-foreground">成功案例</span>
        </h2>
        <p className="text-muted-foreground/60 italic text-center text-sm mb-1">
          Creator Incubation Success Stories
        </p>
        <p className="text-muted-foreground text-center text-sm mb-10">
          从零到百万粉丝，打造创作者品牌矩阵
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
