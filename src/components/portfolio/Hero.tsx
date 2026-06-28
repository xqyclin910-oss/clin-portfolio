'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-12 md:py-16">
      {/* PC端：左右横向布局；移动端：堆叠 */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* 左侧：方形圆角照片 */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/5 flex-shrink-0 bg-card">
          <Image
            src="/assets/profile_photo.jpg"
            alt="谢秋阳"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 192px, 256px"
          />
        </div>

        {/* 右侧：文字内容 */}
        <div className="text-center md:text-left flex-1">
          {/* 姓名 - 小字 */}
          <h1 className="text-lg md:text-xl font-medium mb-1 text-foreground/80">
            谢秋阳
          </h1>

          {/* 职位信息 */}
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            课程产品经理 · 5年企业家课程产品设计
          </p>

          {/* Slogan - 视觉重心，最大字体 */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tight leading-tight">
            好的学习促人改变
          </h2>

          {/* 副标题 */}
          <p className="text-base md:text-lg text-primary font-medium">
            服务2000+企业主 · 产品年营收破亿
          </p>
        </div>
      </div>
    </section>
  );
}