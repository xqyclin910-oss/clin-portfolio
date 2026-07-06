'use client';

import Image from 'next/image';
import { useInView, useCountUp } from '@/hooks/useAnimations';

const metrics = [
  { value: 43285, label: '月营收', labelEn: 'Revenue', prefix: '$', suffix: '/mo', decimals: 0 },
  { value: 83172, label: '访客数', labelEn: 'Visitors', prefix: '', decimals: 0 },
  { value: 0.53, label: '转化率', labelEn: 'Conversion', prefix: '', suffix: '%', decimals: 2 },
];

// Shopify截图
const shopifyScreenshots = [
  { src: '/assets/photos/shopify-home.png', label: '首页截图', labelEn: 'Homepage' },
  { src: '/assets/photos/shopify-blog.png', label: '博客页截图', labelEn: 'Blog Page' },
  { src: '/assets/photos/shopify-modules.png', label: '主页模块截图', labelEn: 'Homepage Modules' },
  { src: '/assets/photos/shopify-products.png', label: '产品页截图', labelEn: 'Products Page' },
];

function MetricItem({ metric, index, isVisible }: { metric: typeof metrics[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(metric.value, 1800 + index * 200, isVisible);

  const formatValue = () => {
    if (metric.decimals === 0) {
      return metric.prefix + Math.round(count).toLocaleString() + (metric.suffix || '');
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
      <div className="text-xs text-foreground mt-1 font-medium">
        {metric.label}
      </div>
      <div className="text-[10px] text-muted-foreground/60 italic">
        {metric.labelEn}
      </div>
    </div>
  );
}

function ScreenshotCard({ item, index }: { item: typeof shopifyScreenshots[0]; index: number }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="img-contain aspect-[4/3] hover-lift"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 100}ms`,
      }}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-xs text-white/90 font-medium">{item.label}</span>
        <span className="text-[10px] text-white/50 italic ml-1">{item.labelEn}</span>
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
        className="relative z-10 max-w-5xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
          <span className="text-foreground">DTC电商：</span>
          <span className="gradient-text">TAICHI YOUNG</span>
        </h2>
        <p className="text-muted-foreground/60 italic text-center text-sm mb-1">
          DTC E-commerce: TAICHI YOUNG
        </p>
        <p className="text-muted-foreground text-center text-sm mb-3 max-w-xl mx-auto">
          主导面向美国市场的健康养生DTC品牌全栈运营
        </p>
        <p className="text-muted-foreground/60 italic text-center text-xs mb-10 max-w-xl mx-auto">
          Led the full-stack operation of a health & wellness DTC brand targeting US market
        </p>

        {/* 数据卡片 */}
        <div className="dual-tone-card rounded-xl bg-card/60 backdrop-blur-sm p-8 mb-10">
          <div className="grid grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <MetricItem key={m.label} metric={m} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Shopify截图展示 */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            独立站截图
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Shopify Store Screenshots</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {shopifyScreenshots.map((item, i) => (
              <ScreenshotCard key={item.src} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
