'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  imagePlaceholder: string;
}

const projects: ProjectItem[] = [
  {
    title: '企业数字化转型课程',
    category: '商业管理',
    description: '为500强企业高管定制的数字化转型学习方案',
    imagePlaceholder: '课程封面',
  },
  {
    title: 'AI应用实战训练营',
    category: '技术前沿',
    description: '面向职场人士的AI工具应用与实践课程',
    imagePlaceholder: '课程封面',
  },
  {
    title: '领导力提升工作坊',
    category: '管理培训',
    description: '实战型领导力提升系列课程',
    imagePlaceholder: '课程封面',
  },
  {
    title: '创新思维方法论',
    category: '思维训练',
    description: '培养系统性创新思维能力的课程体系',
    imagePlaceholder: '课程封面',
  },
  {
    title: '行业洞察报告系列',
    category: '研究报告',
    description: '教育科技行业趋势洞察与案例分析',
    imagePlaceholder: '报告封面',
  },
  {
    title: '用户增长实战课',
    category: '运营增长',
    description: '从0到1的用户增长策略与方法论',
    imagePlaceholder: '课程封面',
  },
];

export function ProjectGallery() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">项目作品</h2>
          <p className="text-lg text-muted-foreground">精选课程产品与研究成果</p>
        </div>
        
        {/* 项目网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary hover:shadow-lg hover:shadow-primary/10 group overflow-hidden transition-all duration-300"
            >
              {/* 图片占位区 */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center border-b border-border group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                <div className="text-muted-foreground text-sm">
                  {project.imagePlaceholder}
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* 分类标签 */}
                <Badge 
                  variant="outline" 
                  className="mb-3 px-2 py-1 text-xs border-primary text-primary bg-primary/10"
                >
                  {project.category}
                </Badge>
                
                {/* 项目标题 */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                {/* 项目描述 */}
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* 查看更多按钮 */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            查看更多作品
          </button>
        </div>
      </div>
    </section>
  );
}