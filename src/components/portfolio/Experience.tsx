'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  highlights: string[];
  achievements?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: '博商管理科学研究院',
    position: '产品经理 → 美区线上业务负责人',
    period: '2022.07 - 2026.05',
    highlights: [
      '2年晋升，直接汇报院长&CEO',
      '产品经理阶段：主导7款课程产品从定义到市场',
      '训练营服务2000+学员，年营收800万',
      '录播课100万+学员，年营收2亿',
      '首款产品NPS从47%提升至100%',
      '美区阶段：从0搭建20人中美团队',
      '33账号285万粉丝社媒矩阵',
      '独立站月销30万',
    ],
  },
  {
    company: '火星未来',
    position: '内容项目经理',
    period: '2021.08 - 2022.06',
    highlights: [
      '开发腾讯/字节/小鹏/lululemon等头部企业项目',
      '主导lululemon品牌企业培训',
      '主导奶糖派品牌咨询工作坊',
    ],
  },
  {
    company: '好未来/学而思',
    position: '学科运营',
    period: '2020.09 - 2021.08',
    highlights: [
      '全国高端英语产品线运营',
    ],
  },
];

export function Experience() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">职业经历</h2>
          <p className="text-base text-muted-foreground">持续成长，深耕企业家课程领域</p>
        </div>
        
        {/* 经历列表 */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-border"
            >
              <CardContent className="p-6">
                {/* 公司与职位 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-base text-primary">
                      {exp.position}
                    </p>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="mt-2 md:mt-0 px-3 py-1 text-sm border-border text-muted-foreground bg-transparent"
                  >
                    {exp.period}
                  </Badge>
                </div>
                
                {/* 成果亮点 */}
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li 
                      key={hIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}