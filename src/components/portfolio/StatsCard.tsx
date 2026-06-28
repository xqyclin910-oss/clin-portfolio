'use client';

// 精简的出海核心数据
const stats = [
  { value: '4年', label: '出海' },
  { value: '33', label: '账号' },
  { value: '285万', label: '粉丝' },
  { value: '700万+', label: '年营收' },
];

export function StatsCard() {
  return (
    <section className="px-4 py-4">
      <div className="max-w-4xl mx-auto">
        {/* 一行紧凑展示 */}
        <div className="flex items-center justify-center gap-3 md:gap-6 text-sm md:text-base">
          {stats.map((stat, index) => (
            <span key={index} className="inline-flex items-center gap-1.5">
              <span className="font-bold text-primary">{stat.value}</span>
              <span className="text-muted-foreground">{stat.label}</span>
              {index < stats.length - 1 && (
                <span className="text-muted-foreground/40 ml-1">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}