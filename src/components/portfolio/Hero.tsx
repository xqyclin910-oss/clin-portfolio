'use client';

import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* 背景视频 - B站CDN加速，裁剪隐藏底部控制栏 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.bilibili.com/player.html?bvid=BV1oguJ66EnS&autoplay=1&mute=1&danmaku=0&high_quality=1"
          scrolling="no"
          allowFullScreen
          className="absolute inset-0 w-full h-[115%] pointer-events-none"
          style={{ border: 'none', opacity: 0.35 }}
        />
        {/* 渐变遮罩：覆盖视频+隐藏底部控制栏 */}
        <div className="absolute inset-0 z-10" style={{
          background: 'linear-gradient(180deg, rgba(5,10,20,0.6) 0%, rgba(5,10,20,0.3) 40%, rgba(5,10,20,0.5) 75%, rgba(5,10,20,0.95) 100%)'
        }} />
      </div>

      {/* 网格背景 */}
      <div className="grid-bg" aria-hidden="true" />

      {/* 浮动粒子 */}
      <div className="floating-particle" style={{ top: '15%', left: '10%', animationDelay: '0s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ top: '25%', right: '15%', animationDelay: '2s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ bottom: '30%', left: '20%', animationDelay: '4s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ top: '40%', right: '25%', animationDelay: '6s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ bottom: '20%', right: '10%', animationDelay: '1s' }} aria-hidden="true" />

      {/* 顶部渐变条 */}
      <div className="absolute top-0 left-0 right-0 h-0.5 gradient-bar" aria-hidden="true" />

      {/* 主内容 */}
      <div className="relative z-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight">
          <span className="gradient-text">驱动百万增长的内容</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground italic mb-6 tracking-wide">
          Content That Moves Millions
        </p>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3">
          <span className="text-primary font-semibold">9个月</span>
          自然流构建
          <span className="text-primary font-semibold">285万+粉丝</span>
          社媒矩阵
        </p>
        <p className="text-sm text-muted-foreground/60 italic max-w-2xl mx-auto">
          Built a 2.85M+ follower social media matrix organically in 9 months
        </p>
      </div>

      {/* 下滑箭头 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-arrow z-20" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary/60"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
