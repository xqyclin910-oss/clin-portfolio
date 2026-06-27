'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogItem {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}

const blogs: BlogItem[] = [
  {
    title: '如何打造爆款课程产品',
    category: '产品方法论',
    excerpt: '从用户洞察到内容策划，分享课程产品的核心设计思路...',
    date: '2024-03',
    readTime: '8分钟',
  },
  {
    title: '教育科技的未来趋势',
    category: '行业洞察',
    excerpt: 'AI时代下教育科技的发展方向与机遇分析...',
    date: '2024-02',
    readTime: '12分钟',
  },
  {
    title: '用户增长实战经验',
    category: '运营策略',
    excerpt: '从数据驱动的视角看课程产品的用户增长策略...',
    date: '2024-01',
    readTime: '10分钟',
  },
  {
    title: '课程质量评估体系',
    category: '方法论',
    excerpt: '建立科学的课程质量评估框架，持续提升产品竞争力...',
    date: '2023-12',
    readTime: '15分钟',
  },
];

export function BlogSection() {
  return (
    <section className="px-6 py-24 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">博客文章</h2>
          <p className="text-lg text-muted-foreground">思考沉淀与经验分享</p>
        </div>
        
        {/* 博客网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary hover:shadow-lg group transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                {/* 分类标签 */}
                <Badge 
                  variant="outline" 
                  className="mb-4 px-2 py-1 text-xs border-muted-foreground text-muted-foreground"
                >
                  {blog.category}
                </Badge>
                
                {/* 标题 */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                {/* 摘要 */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
                
                {/* 元信息 */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{blog.readTime}阅读</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* 查看更多 */}
        <div className="text-center mt-12">
          <button className="px-6 py-2.5 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-all duration-300">
            阅读更多文章
          </button>
        </div>
      </div>
    </section>
  );
}