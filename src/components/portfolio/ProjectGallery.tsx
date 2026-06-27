'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  imagePlaceholder?: string;
  type: 'image' | 'document' | 'long-image';
}

// 占位数据 - 用户后续会补充具体内容
const projectCategories = [
  {
    categoryName: '课程产品设计',
    projects: [
      {
        title: '待更新',
        category: '课程产品',
        description: '项目说明待补充',
        type: 'image' as const,
      },
      {
        title: '待更新',
        category: '课程产品',
        description: '项目说明待补充',
        type: 'image' as const,
      },
    ],
  },
  {
    categoryName: '美区业务成果',
    projects: [
      {
        title: '待更新',
        category: '美区业务',
        description: '项目说明待补充',
        type: 'image' as const,
      },
      {
        title: '待更新',
        category: '美区业务',
        description: '项目说明待补充',
        type: 'document' as const,
      },
      {
        title: '待更新',
        category: '美区业务',
        description: '长图项目说明待补充',
        type: 'long-image' as const,
      },
    ],
  },
];

export function ProjectGallery() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">项目作品</h2>
          <p className="text-base text-muted-foreground">精选课程产品与业务成果</p>
        </div>
        
        {/* 分类展示 */}
        {projectCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-12">
            {/* 分类标题 */}
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded" />
              {category.categoryName}
            </h3>
            
            {/* 项目网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, projIndex) => (
                <Card 
                  key={projIndex}
                  className="bg-card border-border"
                >
                  {/* 图片占位区 */}
                  <div className={`aspect-video bg-secondary flex items-center justify-center border-b border-border ${
                    project.type === 'long-image' ? 'scroll-img-container' : 'img-container'
                  }`} style={{ maxHeight: project.type === 'long-image' ? '600px' : undefined }}>
                    <div className="text-muted-foreground text-sm">
                      {project.type === 'document' ? 'PDF文档' : '图片占位'}
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    {/* 分类标签 */}
                    <Badge 
                      variant="outline" 
                      className="mb-3 px-2 py-1 text-xs border-primary text-primary bg-primary/10"
                    >
                      {project.category}
                    </Badge>
                    
                    {/* 项目标题 */}
                    <h4 className="text-base font-semibold text-foreground mb-2">
                      {project.title}
                    </h4>
                    
                    {/* 项目描述 */}
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}