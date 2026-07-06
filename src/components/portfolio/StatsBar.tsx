'use client';

import { useInView, useCountUp } from '@/hooks/useAnimations';

const stats = [
  { value: 374, suffix: '万+', label: '累计运营粉丝', labelEn: 'Total Followers Managed', decimals: 0 },
  { value: 100, suffix: '+', label: '运营账号数', labelEn: 'Accounts Operated', decimals: 0 },
  { value: 5, suffix: '亿+', label: '累计播放量', labelEn: 'Total Views', decimals: 0 },
  { value: 285, suffix: '万+', label: '自建矩阵粉丝', labelEn: 'Self-built Matrix Followers', decimals: 0 },
];

function StatItem({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.value, 1800 + index * 200, isVisible);

  const formatValue = () => {
    if (stat.decimals === 0) return Math.round(count).toString();
    return count.toFixed(stat.decimals);
  };

  return (
    <div
      className="text-center px-4 md:px-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 150}ms`,
      }}
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-black gradient-text tabular-nums">
        {formatValue()}{stat.suffix}
      </div>
      <div className="text-xs md:text-sm text-foreground mt-2 font-medium">
        {stat.label}
      </div>
      <div className="text-[10px] md:text-xs text-muted-foreground/60 italic mt-0.5">
        {stat.labelEn}
      </div>
    </div>
  );
}

export function StatsBar() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-12 md:py-16 border-y border-border/50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 gradient-bar rounded-full" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
