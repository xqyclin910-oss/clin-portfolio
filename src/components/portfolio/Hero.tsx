'use client';

import Image from 'next/image';

export function Hero() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        {/* 个人照片 - 圆形裁剪 + 细边框 */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10">
            <Image
              src="/assets/profile_photo.jpg"
              alt="谢秋阳"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 112px, 144px"
            />
          </div>
        </div>

        {/* 姓名 - 小字 */}
        <h1 className="text-xl md:text-2xl font-medium mb-2 text-foreground/80">
          谢秋阳
        </h1>

        {/* 职位信息 - 更小 */}
        <p className="text-sm md:text-base text-muted-foreground mb-8">
          课程产品经理 · 5年企业家课程产品设计
        </p>

        {/* Slogan - 视觉重心，最大字体 */}
        <h2 className="text-4xl md:text-6xl font-black mb-8 text-foreground tracking-tight leading-tight">
          好的学习促人改变
        </h2>

        {/* 副标题 - 适中 */}
        <p className="text-lg md:text-xl text-primary font-medium">
          服务2000+企业主 · 产品年营收破亿
        </p>
      </div>
    </section>
  );
}