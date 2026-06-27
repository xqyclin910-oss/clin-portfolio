'use client';

import { Card, CardContent } from '@/components/ui/card';

interface ContactItem {
  label: string;
  value: string;
}

const contacts: ContactItem[] = [
  {
    label: '电话',
    value: '(+86) 15293817969',
  },
  {
    label: '邮箱',
    value: 'xqyclin910@gmail.com',
  },
  {
    label: '地点',
    value: '深圳',
  },
];

const education: ContactItem[] = [
  {
    label: '硕士',
    value: '香港理工大学（QS54）',
  },
  {
    label: '本科',
    value: '北京第二外国语学院（双一流）',
  },
];

export function Contact() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-foreground">联系方式</h2>
          <p className="text-base text-muted-foreground">期待与您深入交流</p>
        </div>
        
        {/* 联系信息 */}
        <Card className="bg-card border-border mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">基本信息</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contacts.map((contact, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm text-muted-foreground">
                    {contact.label}：
                  </span>
                  <span className="text-base text-foreground font-medium">
                    {contact.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* 教育背景 */}
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">教育背景</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <span className="text-sm text-muted-foreground">
                    {edu.label}：
                  </span>
                  <span className="text-base text-foreground font-medium">
                    {edu.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        {/* 结尾 */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3">
            <div className="w-16 h-0.5 bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-16 h-0.5 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}