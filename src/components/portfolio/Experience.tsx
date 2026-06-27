'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: '某知名教育科技公司',
    position: '课程产品经理',
    period: '2021 - 至今',
    description: '负责旗舰课程产品的策划与运营，主导多门爆款课程上线',
    highlights: [
      '策划并上线15门精品课程',
      '学员满意度达98.5%',
      '单课程营收超千万',
    ],
  },
  {
    company: '某在线学习平台',
    position: '内容运营主管',
    period: '2018 - 2021',
    description: '负责平台课程内容规划与质量控制',
    highlights: [
      '建立课程质量评估体系',
      '优化课程学习路径设计',
      '推动课程迭代更新机制',
    ],
  },
  {
    company: '某培训教育机构',
    position: '课程策划专员',
    period: '2016 - 2018',
    description: '参与线下课程设计与教学支持工作',
    highlights: [
      '协助开发10+门线下课程',
      '优化教学材料与课件',
      '学员反馈收集与分析',
    ],
  },
];

export function Experience() {
  return (
    <section className="px-6 py-24 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">职业经历</h2>
          <p className="text-lg text-muted-foreground">持续成长，深耕教育领域</p>
        </div>
        
        {/* 时间线 */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                {/* 公司与职位 */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    <div className="text-lg text-primary">
                      {exp.position}
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="mt-2 md:mt-0 px-4 py-1 text-sm border-muted-foreground text-muted-foreground"
                  >
                    {exp.period}
                  </Badge>
                </div>
                
                {/* 描述 */}
                <p className="text-muted-foreground mb-6">
                  {exp.description}
                </p>
                
                {/* 成果亮点 */}
                <div className="flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <span 
                      key={hIndex}
                      className="px-3 py-1.5 rounded-md bg-secondary/50 text-secondary-foreground text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}