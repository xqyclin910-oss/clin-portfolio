'use client';

import { useInView } from '@/hooks/useAnimations';

const experiences = [
  {
    role: '海外社媒负责人',
    roleEn: 'Head of Overseas Social Media',
    company: '博商管理咨询',
    companyEn: 'Boshang Management Consulting',
    period: '2023 - 2025',
    desc: '主导管理咨询公司的海外社媒战略与内容增长，搭建33个账号矩阵，覆盖285万+粉丝',
    descEn: 'Led overseas social media strategy and content growth, building a 33-account matrix reaching 2.85M followers',
  },
  {
    role: '内容策略主管',
    roleEn: 'Content Strategy Lead',
    company: '数字媒体机构',
    companyEn: 'Digital Media Agency',
    period: '2021 - 2023',
    desc: '为10+达人账号制定内容策略，驱动受众从零增长到数十万',
    descEn: 'Developed content strategies for 10+ creator accounts, driving audience growth from zero to hundreds of thousands',
  },
  {
    role: '社媒运营经理',
    roleEn: 'Social Media Manager',
    company: '科技初创公司',
    companyEn: 'Tech Startup',
    period: '2020 - 2021',
    desc: '管理多平台社媒运营，创作病毒式传播内容，实现百万级播放量',
    descEn: 'Managed multi-platform social media presence, creating viral content that achieved millions of views',
  },
];

const contact = [
  { label: '邮箱', labelEn: 'Email', value: 'katrina.xie@outlook.com', href: 'mailto:katrina.xie@outlook.com' },
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
            <span className="text-foreground">联系</span>
            <span className="gradient-text">我</span>
          </h2>
          <p className="text-muted-foreground/60 italic text-sm mb-1">
            Let&apos;s Connect
          </p>
          <p className="text-muted-foreground text-sm">
            欢迎内容策略与达人增长方面的合作
          </p>
          <p className="text-muted-foreground/60 italic text-xs">
            Open to collaborations in content strategy and creator growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
          <div className="dual-tone-card hover-lift rounded-lg bg-card/60 p-4">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              教育背景
              <span className="text-muted-foreground/50 italic ml-1 normal-case">Education</span>
            </div>
            <div className="text-sm font-medium text-foreground">
              工学学士
              <span className="text-muted-foreground/60 italic text-xs ml-2">Bachelor of Engineering</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              计算机科学与技术
              <span className="text-muted-foreground/50 italic ml-1">Computer Science & Technology</span>
            </div>
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
