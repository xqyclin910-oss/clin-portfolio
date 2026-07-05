'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-12 md:py-16 overflow-hidden">
      {/* 网格背景动画 */}
      <div className="grid-bg" aria-hidden="true" />

      {/* 浮动粒子装饰 */}
      <div className="floating-particle" style={{ top: '15%', left: '10%', animationDelay: '0s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ top: '25%', right: '15%', animationDelay: '2s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ bottom: '30%', left: '20%', animationDelay: '4s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ top: '40%', right: '25%', animationDelay: '6s' }} aria-hidden="true" />
      <div className="floating-particle" style={{ bottom: '20%', right: '10%', animationDelay: '1s' }} aria-hidden="true" />

      {/* 蓝绿拼色渐变条 - 顶部 */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bar" aria-hidden="true" />

      {/* 主内容 */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* 左侧：竖版矩形圆角照片 */}
        <div className="relative w-32 h-48 md:w-44 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/5 flex-shrink-0">
          <Image
            src="/assets/profile_photo.jpg"
            alt="谢秋阳"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 128px, 176px"
          />
          {/* 照片边框渐变效果 */}
          <div className="absolute inset-0 rounded-2xl border border-primary/10 pointer-events-none" />
        </div>

        {/* 右侧：文字内容 */}
        <div className="text-center md:text-left flex-1">
          {/* 姓名 - 小字 */}
          <h1 className="text-lg md:text-xl font-medium mb-1 text-foreground/80">
            谢秋阳
          </h1>

          {/* 职位信息 */}
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            海外内容营销与社媒增长 · 5年内容与增长经验
          </p>

          {/* Slogan - 视觉重心，最大字体 */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tight leading-tight">
            Win with Great Content
          </h2>

          {/* 副标题 - 蓝绿渐变强调 */}
          <p className="text-base md:text-lg font-medium bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            33账号 · 285万海外粉丝 · 9个月从0自然流起号
          </p>
        </div>
      </div>

      {/* 下滑箭头 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-arrow" aria-hidden="true">
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
