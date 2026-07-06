'use client';

import { useInView } from '@/hooks/useAnimations';

const experiences = [
  {
    role: '产品经理 → 海外社媒与增长负责人',
    roleEn: 'Product Manager → Head of Overseas Social Media & Growth',
    company: '博商管理科学研究院',
    companyEn: 'Boshang Management Institute',
    period: '2022.07 - 2026.05',
    desc: '搭建33账号285万粉社媒矩阵，主导TAICHI YOUNG欧美独立站',
    descEn: 'Built a 33-account 2.85M follower social media matrix, led TAICHI YOUNG DTC store for US/EU market',
  },
  {
    role: '内容项目经理',
    roleEn: 'Content Project Manager',
    company: '火星未来',
    companyEn: 'Mars Future',
    period: '2021.08 - 2022.06',
    desc: '负责内容项目管理与交付',
    descEn: 'Managed content project management and delivery',
  },
  {
    role: '英语学科运营',
    roleEn: 'English Subject Operations',
    company: '好未来/学而思',
    companyEn: 'TAL Education',
    period: '2020.09 - 2021.08',
    desc: '负责英语学科运营工作',
    descEn: 'Managed English subject operations',
  },
];

const education = [
  {
    school: 'The Hong Kong Polytechnic University',
    degree: 'Master',
    major: 'China Business Studies',
    rank: 'QS54',
  },
  {
    school: 'Beijing International Studies University',
    degree: 'Bachelor',
    major: 'Hospitality Management',
    rank: '',
  },
];

const contact = [
  { label: '邮箱', labelEn: 'Email', value: 'xqyclin910@gmail.com', href: 'mailto:xqyclin910@gmail.com' },
  { label: '所在地', labelEn: 'Location', value: '中国·深圳 / Shenzhen, China', href: null },
];

export function Contact() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 gradient-bar rounded-full" aria-hidden="true" />

      <div
        ref={ref}
        className="max-w-5xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        {/* 联系方式标题 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <span className="text-foreground">认识</span>
            <span className="gradient-text">我</span>
          </h2>
          <p className="text-muted-foreground/60 italic text-sm mb-1">
            Get to Know Me
          </p>
          <p className="text-muted-foreground text-sm">
            欢迎内容策略与达人增长方面的合作
          </p>
          <p className="text-muted-foreground/60 italic text-xs">
            Open to collaborations in content strategy and creator growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 联系方式卡片 */}
          <div className="space-y-4">
            {contact.map((item) => (
              <div
                key={item.label}
                className="dual-tone-card hover-lift rounded-lg bg-card/60 p-4"
              >
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                  <span className="text-muted-foreground/50 italic ml-1 normal-case">{item.labelEn}</span>
                </div>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="text-sm font-medium text-foreground">{item.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* 教育背景 */}
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="dual-tone-card hover-lift rounded-lg bg-card/60 p-4">
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  Education
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-sm font-medium text-foreground">{edu.school}</span>
                  {edu.rank && <span className="text-[10px] text-primary/70 font-medium">{edu.rank}</span>}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-foreground font-medium">{edu.degree}</span>
                  <span className="text-xs text-muted-foreground">|</span>
                  <span className="text-xs text-muted-foreground">{edu.major}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 职业经历时间轴 */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            职业经历
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-6 ml-4">Professional Experience</p>

          <div className="relative pl-6 border-l border-border/50 space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={exp.role}
                className="relative"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.5s ease ${i * 150}ms`,
                }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary/30 border-2 border-primary pulse-dot" />

                <div className="dual-tone-card hover-lift rounded-lg bg-card/40 p-4">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-foreground">{exp.role}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[10px] text-muted-foreground/50 italic">{exp.roleEn}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">at {exp.company}</span>
                    <span className="text-[10px] text-muted-foreground/50 italic">{exp.companyEn}</span>
                  </div>
                  <div className="text-xs text-primary/70 mb-2">{exp.period}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                  <p className="text-[10px] text-muted-foreground/50 italic leading-relaxed mt-1">{exp.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
