'use client';

import { Card, CardContent } from '@/components/ui/card';

interface ContactItem {
  label: string;
  value: string;
  icon: string;
}

const contacts: ContactItem[] = [
  {
    label: '邮箱',
    value: 'qiuyang.xie@example.com',
    icon: '📧',
  },
  {
    label: '微信',
    value: 'XieQiuyang_PM',
    icon: '💬',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/qiuyang-xie',
    icon: '🔗',
  },
  {
    label: '作品集',
    value: 'portfolio.qiuyang.com',
    icon: '🌐',
  },
];

export function Contact() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">联系方式</h2>
          <p className="text-lg text-muted-foreground">期待与您深入交流</p>
        </div>
        
        {/* 联系方式卡片 */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 hover:border-primary border border-transparent transition-all duration-300"
                >
                  {/* 图标 */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-lg">
                    {contact.icon}
                  </div>
                  
                  {/* 信息 */}
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {contact.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {contact.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 补充说明 */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                如有课程合作、项目咨询或其他事宜，欢迎随时联系
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                期待加入腾讯青腾，共创优质教育产品
              </p>
            </div>
          </CardContent>
        </Card>
        
        {/* 装饰性结尾 */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}