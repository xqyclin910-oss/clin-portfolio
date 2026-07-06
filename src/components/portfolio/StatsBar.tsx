'use client';

import { useInView, useCountUp } from '@/hooks/useAnimations';

const stats = [
  { value: 2.85, suffix: 'M+', label: '全网粉丝', labelEn: 'Total Followers', decimals: 2 },
  { value: 33, suffix: '', label: '运营账号', labelEn: 'Accounts Managed', decimals: 0 },
  { value: 3.1, suffix: 'M+', label: '视频播放量', labelEn: 'Video Views', decimals: 1 },
  { value: 9, suffix: ' 个月', label: '增长周期', labelEn: 'Months to Scale', decimals: 0 },
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
