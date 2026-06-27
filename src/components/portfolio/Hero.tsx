'use client';

export function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* 姓名 */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground tracking-tight">
          谢秋阳
        </h1>
        
        {/* 定位 */}
        <p className="text-xl md:text-2xl text-primary font-semibold mb-3">
          5年企业家课程产品设计 | 好的学习促人改变
        </p>
        
        {/* 副标题 */}
        <p className="text-base md:text-lg text-muted-foreground">
          服务2000+企业主 · 产品年营收破亿
        </p>
        
        {/* 分隔线 */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-20 h-0.5 bg-border" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-20 h-0.5 bg-border" />
        </div>
      </div>
    </section>
  );
}