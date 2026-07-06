'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const metrics = [
  { value: '$43,285', label: '月营收', labelEn: 'Revenue', suffix: '/mo' },
  { value: '83,172', label: '访客数', labelEn: 'Visitors' },
  { value: '0.53%', label: '转化率', labelEn: 'Conversion' },
];

// Shopify截图
const shopifyScreenshots = [
  { src: '/assets/photos/shopify-home.png', label: '首页截图', labelEn: 'Homepage' },
  { src: '/assets/photos/shopify-blog.png', label: '博客页截图', labelEn: 'Blog Page' },
  { src: '/assets/photos/shopify-modules.png', label: '主页模块截图', labelEn: 'Homepage Modules' },
  { src: '/assets/photos/shopify-products.png', label: '产品页截图', labelEn: 'Products Page' },
];

function MetricItem({ metric, index, isVisible }: { metric: typeof metrics[0]; index: number; isVisible: boolean }) {
  return (
    <div
      className="text-center px-2 md:px-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 150}ms`,
      }}
    >
      <div className="text-lg md:text-3xl font-black gradient-text tabular-nums whitespace-nowrap">
        {metric.value}{metric.suffix || ''}
      </div>
      <div className="text-[10px] md:text-xs text-foreground mt-1 font-medium">
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
      className="relative overflow-hidden rounded-lg border border-border/20 hover-lift"
      style={{
        aspectRatio: '16/9',
        backgroundColor: '#0a1929',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 100}ms`,
      }}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-contain p-2"
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
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* 背景视频 */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/independent-site-promo.mp4"
          muted
          loop
          playsInline
          autoPlay
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050a14] via-[#050a14]/90 to-[#050a14]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary" />
            DTC独立站项目
          </h2>
          <p className="text-sm text-muted-foreground italic">
            DTC E-commerce: TAICHI YOUNG
          </p>
        </div>

        {/* 数据指标 */}
        <div
          className="grid grid-cols-3 gap-2 md:gap-8 mb-10 p-3 md:p-6 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          {metrics.map((metric, index) => (
            <MetricItem key={index} metric={metric} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* 项目描述 */}
        <div
          className="text-center mb-10 max-w-2xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            主导欧美独立站全栈运营，从Shopify建站、SEO优化到内容营销，实现从0到1的突破。
          </p>
          <p className="text-xs md:text-sm text-muted-foreground/60 italic mt-2">
            Led full-stack operation of a DTC brand targeting US market, from Shopify setup to SEO and content marketing.
          </p>
        </div>

        {/* Shopify截图展示 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {shopifyScreenshots.map((item, index) => (
            <ScreenshotCard key={item.src} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
