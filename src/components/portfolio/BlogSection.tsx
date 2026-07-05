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
    slug: 'social-media-sop',
    title: '海外社媒起号SOP：9个月从0到285万粉丝',
    category: '社媒运营',
    excerpt: '从0搭建33个跨平台账号的完整方法论，包括内容分层策略、数据验证流程和4大平台起号SOP。',
  },
  {
    slug: 'content-strategy',
    title: '内容分层策略：流量型/专业型/营销型内容如何配合',
    category: '内容策略',
    excerpt: '如何将产品卖点拆解为可测试的内容方向，配合FB投放验证CTR/CPC/转化率，筛选高转化卖点反哺自然流选题。',
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
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {blog.excerpt}
                    </p>
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