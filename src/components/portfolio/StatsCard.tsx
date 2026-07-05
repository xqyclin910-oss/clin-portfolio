'use client';

// 海外社媒核心数据
const stats = [
  { value: '2.85M', label: '矩阵总粉丝' },
  { value: '33', label: '跨平台账号' },
  { value: '150-200', label: '月均视频产出' },
  { value: '75+', label: '自然流爆款' },
  { value: '8万+', label: '独立站点击' },
  { value: '>3', label: 'LTV/CAC' },
];

export function StatsCard() {
  return (
    <section className="px-4 py-4">
      <div className="max-w-5xl mx-auto">
        {/* 一行紧凑展示 */}
        <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm flex-wrap">
          {stats.map((stat, index) => (
            <span key={index} className="inline-flex items-center gap-1">
              <span className="font-bold text-primary">{stat.value}</span>
              <span className="text-muted-foreground">{stat.label}</span>
              {index < stats.length - 1 && (
                <span className="text-muted-foreground/30 ml-1">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}