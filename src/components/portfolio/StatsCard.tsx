'use client';

import { Card, CardContent } from '@/components/ui/card';

interface StatItem {
  value: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: '8+',
    label: '年行业经验',
    description: '深耕教育科技领域',
  },
  {
    value: '50+',
    label: '课程项目',
    description: '主导课程产品开发',
  },
  {
    value: '10万+',
    label: '学员覆盖',
    description: '优质内容惠及学员',
  },
  {
    value: '98%',
    label: '满意度',
    description: '课程满意度评分',
  },
];

export function StatsCard() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">核心数据</h2>
          <p className="text-lg text-muted-foreground">以数据见证专业实力</p>
        </div>
        
        {/* 数据卡片网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                {/* 数值 */}
                <div className="text-4xl md:text-5xl font-bold text-primary mb-3 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                
                {/* 标签 */}
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                
                {/* 描述 */}
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}