'use client';

import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { GraduationCap, Award } from 'lucide-react';

// 联系方式数据
const contacts = [
  {
    icon: Mail,
    label: '邮箱',
    value: 'xqyclin910@gmail.com',
    href: 'mailto:xqyclin910@gmail.com',
  },
  {
    icon: Phone,
    label: '电话',
    value: '+86 15293817969',
    href: 'tel:+8615293817969',
  },
  {
    icon: MapPin,
    label: '地点',
    value: '深圳 / 可 relocate 上海',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/xieqiuyang',
    href: 'https://linkedin.com/in/xieqiuyang',
  },
];

// 教育背景数据
const education = [
  {
    school: '香港理工大学',
    degree: 'China Business Studies / 硕士',
    time: '2019.09 - 2020.09',
    badge: 'QS 54',
  },
  {
    school: '北京第二外国语学院',
    degree: 'Hospitality Management / 本科',
    time: '2015.09 - 2019.06',
    badge: '双一流',
  },
];

// 证书数据
const certificates = [
  '英语专八',
  '雅思 7.5',
  'GMAT 660',
  'PMP (2A)',
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-8 md:py-10">
      <div className="max-w-4xl mx-auto">
        {/* 主标题 */}
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          找到我
        </h2>

        {/* 联系方式卡片网格 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            const content = (
              <div 
                key={index}
                className={`group p-4 rounded-lg border border-border bg-card/50 
                  hover:border-primary/30 hover:bg-card transition-all duration-200
                  ${contact.href ? 'cursor-pointer' : ''}`}
              >
                {/* 图标 */}
                <Icon className="w-5 h-5 text-primary mb-2" />
                {/* 标签 */}
                <p className="text-xs text-muted-foreground mb-1">
                  {contact.label}
                </p>
                {/* 值 */}
                <p className="text-sm font-medium text-foreground truncate">
                  {contact.value}
                </p>
              </div>
            );

            if (contact.href) {
              return (
                <a 
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              );
            }
            return content;
          })}
        </div>

        {/* 教育背景 */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            教育背景
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {education.map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-border bg-card/50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base font-semibold text-foreground mb-1">
                      {item.school}
                    </p>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.degree}
                    </p>
                    {item.time && (
                      <p className="text-xs text-muted-foreground/70">
                        {item.time}
                      </p>
                    )}
                  </div>
                  {item.badge && (
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 证书 */}
        <div>
          <h3 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            专业证书
          </h3>
          <div className="flex flex-wrap gap-2">
            {certificates.map((cert, index) => (
              <span 
                key={index}
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-card/50 text-foreground"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}