'use client';

import { useInView, useCountUp } from '@/hooks/useAnimations';

const metrics = [
  { value: 12826, label: 'Revenue', prefix: '$', decimals: 0 },
  { value: 83172, label: 'Visitors', prefix: '', decimals: 0 },
  { value: 0.53, label: 'Conversion', prefix: '', suffix: '%', decimals: 2 },
];

function MetricItem({ metric, index, isVisible }: { metric: typeof metrics[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(metric.value, 1800 + index * 200, isVisible);

  const formatValue = () => {
    if (metric.decimals === 0) {
      return metric.prefix + Math.round(count).toLocaleString();
    }
    return metric.prefix + count.toFixed(metric.decimals) + (metric.suffix || '');
  };

  return (
    <div
      className="text-center px-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 150}ms`,
      }}
    >
      <div className="text-2xl md:text-3xl font-black gradient-text tabular-nums">
        {formatValue()}
      </div>
      <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
        {metric.label}
      </div>
    </div>
  );
}

export function DTCStore() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className="relative py-16 md:py-20 px-4 overflow-hidden">
      {/* 背景视频 */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/videos/independent-site-promo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          <span className="text-foreground">DTC E-commerce: </span>
          <span className="gradient-text">TAICHI YOUNG</span>
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-10 max-w-xl mx-auto">
          Led the full-stack operation of a health & wellness DTC brand targeting US market
        </p>

        <div className="dual-tone-card rounded-xl bg-card/60 backdrop-blur-sm p-8">
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <MetricItem key={m.label} metric={m} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
