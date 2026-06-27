'use client';

import { Badge } from '@/components/ui/badge';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* 姓名 */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">
          谢秋阳
        </h1>
        
        {/* 定位标签 */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Badge 
            variant="outline" 
            className="px-4 py-2 text-base border-primary text-primary bg-primary/10"
          >
            课程产品经理
          </Badge>
          <Badge 
            variant="outline" 
            className="px-4 py-2 text-base border-muted-foreground text-muted-foreground"
          >
            教育科技
          </Badge>
        </div>
        
        {/* 简介 */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
          专注于课程内容策划与用户体验优化，
          <br className="hidden md:block" />
          致力于打造有温度、有深度的学习产品
        </p>
        
        {/* 核心优势关键词 */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['内容策划', '用户洞察', '数据驱动', '项目管理'].map((keyword) => (
            <span 
              key={keyword}
              className="px-5 py-2 rounded-lg bg-secondary/50 text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-all duration-300"
            >
              {keyword}
            </span>
          ))}
        </div>
        
        {/* 装饰性分隔线 */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}