'use client';

import { useInView } from '@/hooks/useAnimations';

const experiences = [
  {
    role: 'Head of Overseas Social Media',
    company: 'Boshang Management Consulting',
    period: '2023 - 2025',
    desc: 'Led overseas social media strategy and content growth for a management consulting firm, building a 33-account matrix reaching 2.85M followers',
  },
  {
    role: 'Content Strategy Lead',
    company: 'Digital Media Agency',
    period: '2021 - 2023',
    desc: 'Developed content strategies for 10+ creator accounts, driving audience growth from zero to hundreds of thousands',
  },
  {
    role: 'Social Media Manager',
    company: 'Tech Startup',
    period: '2020 - 2021',
    desc: 'Managed multi-platform social media presence, creating viral content that achieved millions of views',
  },
];

const contact = [
  { label: 'Email', value: 'katrina.xie@outlook.com', href: 'mailto:katrina.xie@outlook.com' },
  { label: 'Location', value: 'Shenzhen, China', href: null },
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
        {/* Contact Info */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-foreground">Let&apos;s </span>
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Open to collaborations in content strategy and creator growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contact.map((item) => (
              <div
                key={item.label}
                className="dual-tone-card hover-lift rounded-lg bg-card/60 p-4"
              >
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
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

          {/* Education */}
          <div className="dual-tone-card hover-lift rounded-lg bg-card/60 p-4">
            <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              Education
            </div>
            <div className="text-sm font-medium text-foreground">
              Bachelor of Engineering
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Computer Science & Technology
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Professional Experience
          </h3>

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
                    <span className="text-xs text-muted-foreground">at {exp.company}</span>
                  </div>
                  <div className="text-xs text-primary/70 mb-2">{exp.period}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
