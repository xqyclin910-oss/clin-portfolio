'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogItem {
  title: string;
  category: string;
  excerpt: string;
}

const blogs: BlogItem[] = [
  {
    title: '待更新',
    category: '文章',
    excerpt: '文章即将发布',
  },
  {
    title: '待更新',
    category: '文章',
    excerpt: '文章即将发布',
  },
  {
    title: '待更新',
    category: '文章',
    excerpt: '文章即将发布',
  },
  {
    title: '待更新',
    category: '文章',
    excerpt: '文章即将发布',
  },
];

export function BlogSection() {
  return (
    <section className="px-6 py-16 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">博客文章</h2>
          <p className="text-base text-muted-foreground">思考沉淀与经验分享</p>
        </div>
        
        {/* 博客网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <Card 
              key={index}
              className="bg-card border-border"
            >
              <CardContent className="p-5">
                {/* 分类标签 */}
                <Badge 
                  variant="outline" 
                  className="mb-3 px-2 py-1 text-xs border-border text-muted-foreground bg-transparent"
                >
                  {blog.category}
                </Badge>
                
                {/* 标题 */}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {blog.title}
                </h3>
                
                {/* 摘要 */}
                <p className="text-sm text-muted-foreground">
                  {blog.excerpt}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}