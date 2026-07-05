'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-12 md:py-16">
      {/* PC端：左右横向布局；移动端：堆叠 */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
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

          {/* 副标题 */}
          <p className="text-base md:text-lg text-primary font-medium">
            33账号 · 285万海外粉丝 · 9个月从0自然流起号
          </p>
        </div>
      </div>
    </section>
  );
}