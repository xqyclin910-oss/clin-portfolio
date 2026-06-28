'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface BlogItem {
  slug?: string;
  title: string;
  category: string;
  excerpt: string;
  date?: string;
}

const blogs: BlogItem[] = [
  {
    slug: 'how-to-write-script',
    title: '内容的第一步是学会说人话',
    category: '课程设计',
    excerpt: '如何写好课程逐字稿的完整方法论，从撰写顺序到口语化表达，帮助你写出真正能打动学员的内容。',
    date: '2024-01',
  },
  {
    slug: 'staying-steady-amid-trends',
    title: '在潮流中稳住脚跟',
    category: '内容设计',
    excerpt: '课程产品经理如何在潮流与经典之间找到平衡？从熊彼特创新五范式到问题树方法论，再到学科体系兜底，帮你建立内容设计的底层框架。',
    date: '2026-06-28',
  },
];

export function BlogSection() {
  return (
    <section className="px-6 py-8 md:py-10 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-foreground">博客文章</h2>
          <p className="text-base text-muted-foreground">思考沉淀与经验分享</p>
        </div>
        
        {/* 博客网格 - PC端2列，移动端单列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            blog.slug ? (
              <Link key={index} href={`/blog/${blog.slug}`}>
                <Card className="bg-card border-border hover:border-primary/50 transition-colors cursor-pointer h-full">
                  <CardContent className="p-6">
                    {/* 分类标签 */}
                    <Badge 
                      variant="outline" 
                      className="mb-3 px-2 py-1 text-xs border-primary/30 text-primary bg-primary/10"
                    >
                      {blog.category}
                    </Badge>
                    
                    {/* 标题 */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    {/* 摘要 */}
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    {/* 日期 */}
                    {blog.date && (
                      <p className="text-xs text-muted-foreground">
                        {blog.date}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Card 
                key={index}
                className="bg-card border-border h-full"
              >
                <CardContent className="p-6">
                  {/* 分类标签 */}
                  <Badge 
                    variant="outline" 
                    className="mb-3 px-2 py-1 text-xs border-border text-muted-foreground bg-transparent"
                  >
                    {blog.category}
                  </Badge>
                  
                  {/* 标题 */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {blog.title}
                  </h3>
                  
                  {/* 摘要 */}
                  <p className="text-sm text-muted-foreground">
                    {blog.excerpt}
                  </p>
                </CardContent>
              </Card>
            )
          ))}
        </div>
      </div>
    </section>
  );
}