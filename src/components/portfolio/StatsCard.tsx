'use client';

// 课程产品经理核心数据
const stats = [
  { value: '100万+', label: '学员服务' },
  { value: '2亿', label: '年销售额' },
  { value: '80%+', label: 'NPS' },
  { value: '22位', label: '合作专家' },
  { value: '2.05', label: 'PMF' },
  { value: '47%→100%', label: '首产品NPS' },
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