'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const cases = [
  {
    name: '龙骄尔 Long Jiaoer',
    period: '9个月',
    periodEn: '9 months',
    totalFans: '110万',
    totalFansEn: '1.1M',
    platforms: [
      { name: 'YouTube', fans: '33.2万' },
      { name: 'Instagram', fans: '25万' },
      { name: 'Facebook', fans: '28.8万' },
      { name: 'TikTok', fans: '10.1万' },
    ],
    image: '/assets/photos/success-stories-1.png',
  },
  {
    name: '凯源 Kyran',
    period: '4个月',
    periodEn: '4 months',
    totalFans: '80万',
    totalFansEn: '800K',
    platforms: [
      { name: 'YouTube', fans: '18.7万' },
      { name: 'Instagram', fans: '13.6万' },
      { name: 'Facebook', fans: '24.5万' },
      { name: 'TikTok', fans: '8.9万' },
    ],
    image: '/assets/photos/success-stories-2.png',
  },
  {
    name: '青云 Qingyun',
    period: '8个月',
    periodEn: '8 months',
    totalFans: '100万',
    totalFansEn: '1M',
    platforms: [
      { name: 'YouTube', fans: '25.4万' },
      { name: 'Instagram', fans: '30万' },
      { name: 'Facebook', fans: '11.1万' },
      { name: 'TikTok', fans: '9.5万' },
    ],
    image: '/assets/photos/qingyun-case.jpg',
  },
];

// 案例截图展示
const caseScreenshots = [
  { src: '/assets/photos/case-account-1.png', label: '账号数据截图', labelEn: 'Account Data' },
  { src: '/assets/photos/case-account-2.png', label: '账号数据截图', labelEn: 'Account Data' },
  { src: '/assets/photos/case-account-3.png', label: '账号数据截图', labelEn: 'Account Data' },
  { src: '/assets/photos/case-video.png', label: '视频数据截图', labelEn: 'Video Analytics' },
  { src: '/assets/photos/viral-repost.jpg', label: '病毒式传播', labelEn: 'Viral Content' },
];

function CaseCard({ caseItem, index }: { caseItem: typeof cases[0]; index: number }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="dual-tone-card hover-lift rounded-xl bg-card/80 backdrop-blur-sm p-5"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s ease ${index * 150}ms`,
      }}
    >
      <div className="flex flex-col gap-4">
        {/* 案例信息 */}
        <div>
          <h3 className="text-lg font-bold text-foreground">{caseItem.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            <span className="text-primary">{caseItem.period}</span>
            <span className="text-muted-foreground/60 italic text-xs ml-1">({caseItem.periodEn})</span>
            {' → '}
            <span className="gradient-text font-bold">{caseItem.totalFans} 粉丝</span>
            <span className="text-muted-foreground/60 italic text-xs ml-1">({caseItem.totalFansEn})</span>
          </p>
        </div>

        {/* 平台数据 */}
        <div className="grid grid-cols-2 gap-2">
          {caseItem.platforms.map((p) => (
            <div key={p.name} className="flex justify-between text-xs">
              <span className="text-muted-foreground">{p.name}</span>
              <span className="text-foreground font-medium">{p.fans}</span>
            </div>
          ))}
        </div>

        {/* 数据截图 */}
        <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#0a1929' }}>
          <Image
            src={caseItem.image}
            alt={`${caseItem.name} data`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
}

function ScreenshotCard({ item, index }: { item: typeof caseScreenshots[0]; index: number }) {
  const { ref, isVisible } = useInView(0.2);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col bg-[#0a1120] rounded-xl overflow-hidden border border-[#00d4ff]/15 transition-transform duration-300 hover:scale-105 hover:border-[#00d4ff]/30"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 100}ms`,
      }}
    >
      <div className="relative w-full aspect-[16/9]" style={{ background: '#050a14' }}>
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 50vw, 33vw"
        />
      </div>
      <div className="p-2.5 bg-[#0a1120] border-t border-white/5 w-full">
        <span className="text-xs text-white/90 font-medium block truncate">{item.label}</span>
        <span className="text-[10px] text-white/50 block truncate">{item.labelEn}</span>
      </div>
    </div>
  );
}

export function IPCases() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div
        ref={ref}
        className="max-w-[1400px] mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
          <span className="gradient-text">达人孵化</span>
          <span className="text-foreground">成功案例</span>
        </h2>
        <p className="text-muted-foreground/60 italic text-center text-sm mb-1">
          Creator Incubation Success Stories
        </p>
        <p className="text-muted-foreground text-center text-sm mb-10">
          从零到百万粉丝，打造创作者品牌矩阵
        </p>

        {/* 案例卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cases.map((c, i) => (
            <CaseCard key={c.name} caseItem={c} index={i} />
          ))}
        </div>

        {/* 案例截图展示 */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            更多案例数据截图
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">More Case Data Screenshots</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {caseScreenshots.map((item, i) => (
              <ScreenshotCard key={item.src} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
