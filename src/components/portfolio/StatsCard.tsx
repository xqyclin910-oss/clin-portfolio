'use client';

import { Card, CardContent } from '@/components/ui/card';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: '2000+',
    label: '训练营学员',
  },
  {
    value: '100万+',
    label: '录播课学员',
  },
  {
    value: '¥800万',
    label: '训练营年营收',
  },
  {
    value: '¥2亿',
    label: '录播课年营收',
  },
  {
    value: '2.05',
    label: 'PMF',
  },
  {
    value: '100%',
    label: 'NPS',
  },
];

export function StatsCard() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">核心数据</h2>
          <p className="text-base text-muted-foreground">以数据见证专业实力</p>
        </div>
        
        {/* 数据卡片网格 - 6列响应式 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-card border-border"
            >
              <CardContent className="p-6 text-center">
                {/* 数值 */}
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                
                {/* 标签 */}
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}