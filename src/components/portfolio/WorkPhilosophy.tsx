'use client';

import { useInView } from '@/hooks/useAnimations';

const philosophies = [
  {
    icon: '🚀',
    titleCn: '四大平台起号，不能用同一套打法',
    titleEn: 'Four Platforms, Four Playbooks',
    descCn: '美区起号核心：TK推荐流占80-90%，完播率>30%是命门；INS关系权重高，评论>收藏>转发>点赞决定推流；FB靠实时数据指标+账号权重双驱动，数据达标解锁流量入口，下滑直接限流；YT搜索+长尾为王，CTR→观看时长→满意度三级跳。四平台统一方法论：筹备→冷启动→放量→稳定，每阶段有明确达标线和救流方案。9个月33账号矩阵，验证出来的东西比教科书管用。',
    descEn: 'US market launch playbook: TikTok (80-90% recommendation traffic, completion rate >30% is the lifeline); Instagram (relationship-driven, comment>save>share>like determines reach); Facebook (real-time metrics + account authority dual-engine); YouTube (search + long-tail, CTR→watch time→satisfaction). Unified framework: Prep→Cold Start→Scale→Stabilize, each phase with clear KPIs and recovery protocols. Validated across 33 accounts in 9 months.',
  },
  {
    icon: '🎯',
    titleCn: '付费投放：素材与链路要双向迭代',
    titleEn: 'Paid Ads: Creative & Funnel Must Co-Optimize',
    descCn: '3个月投放复盘（12.16-2.25），ROI从7.61%→11.52%→20.15%，连续三月环比增长。核心发现：前端流量不是问题（CTR 5-9%正常），但用户断在后端落地页（加购率仅5%，行业均值75-90%）。100人通过广告进来，95人没加购就跑了，同时还在伤害投放计划。关键迭代：自然流帖子不带链接也能出单，赢者通吃逻辑——天然跑得好的帖子再投钱放大；加热大概率无用（2月加热占比仅2.32%，ROI反升）；素材师和产品详情页必须同频，前端100分素材进来落地页要有120分体验。',
    descEn: '3-month paid ads retrospective (Dec-Feb): ROI climbed from 7.61%→11.52%→20.15% month-over-month. Key finding: Frontend traffic works (CTR 5-9%), but users drop at the landing page (ATC rate only 5% vs industry 75-90%). 100 users enter, 95 leave without adding to cart — and it\'s hurting the ad algorithm. Critical iterations: Organic posts without links still convert; scale what already works organically; boosting is likely wasteful (Feb boost budget only 2.32%, ROI still climbed); creative team and product page designer must be in sync — 100-point ad creative needs 120-point landing page experience.',
  },
  {
    icon: '⚡',
    titleCn: '赢者通吃，输者快停',
    titleEn: 'Winners Scale, Losers Stop Fast',
    descCn: '自然流内容先自己跑，跑出数据的再投钱放大，天然不行的不浪费预算。把资源集中在已验证有效的方向上，而不是平均分配赌概率。',
    descEn: 'Let organic content prove itself first, then invest in what works. Concentrate resources on validated directions instead of spreading bets evenly.',
  },
  {
    icon: '🔗',
    titleCn: '用户链路不是"曝光→下单"',
    titleEn: 'The User Journey Isn\'t "Impression → Purchase"',
    descCn: '完整链路是 内容曝光→停留观看→互动→信任→点击链接→浏览详情页→加购→结账→买单。每个环节都有可量化的指标，优化必须基于数据而不是体感。',
    descEn: 'The full funnel is: Exposure → Watch → Engage → Trust → Click → Browse → Add to Cart → Checkout → Purchase. Every stage has measurable metrics—optimize with data, not gut feel.',
  },
  {
    icon: '👥',
    titleCn: '0到1的团队，人心比机制更难',
    titleEn: 'In 0-to-1 Teams, People Matter More Than Process',
    descCn: '0到1阶段，机制可以随时调整，但人心一旦出问题，再好的机制也失效。领导者的核心任务是保持团队的突破心力，而不是事无巨细地管流程。',
    descEn: 'In the 0-to-1 phase, processes can be adjusted anytime, but once team morale breaks, no mechanism works. A leader\'s core job is sustaining the team\'s drive to break through.',
  },
  {
    icon: '📊',
    titleCn: '业务模型按季度迭代',
    titleEn: 'Iterate the Business Model Quarterly',
    descCn: '围绕 曝光-点击-留资-购买-履约-复购 全链路节点数据，以季度为单位完成业务模型迭代。不做一次性的大改版，而是持续的小步快跑，LTV/CAC>3 是唯一验收标准。',
    descEn: 'Iterate around the full funnel (exposure-click-lead-purchase-fulfillment-repurchase) on a quarterly cycle. No big-bang overhauls—continuous small iterations. LTV/CAC > 3 is the only acceptance criteria.',
  },
  {
    icon: '💎',
    titleCn: '爆款人物故事的创作方法论',
    titleEn: 'The Anatomy of Viral Personal Stories',
    descCn: 'IP孵化不只是拍视频，是系统设计情绪曲线。一套完整的人物故事结构：①极端反差钩子留人（"一年从倒数第一逆袭全校第一"）②多层冲突递进制造张力（每个阶段一个核心冲突点，如"沉迷游戏→家长会觉醒→逆袭动作"）③情感共鸣点打穿观众（共情、感恩、希望三波情绪递进）④转折点让观众看到"凭什么"（具体方法论而非鸡汤）⑤逆袭/成长结局给观众带走的东西（可复制的启发）。每条视频配专属钩子预设+聊天引导问题清单+情绪曲线图，起号阶段故事性内容必须完整——碎片化叙事在这个阶段是致命伤。',
    descEn: 'IP incubation isn\'t just shooting videos — it\'s engineering emotion curves. A complete personal story structure: ①Extreme contrast hook ("From last place to #1 in one year"); ②Multi-layer conflict escalation (one core conflict per life stage); ③Emotional resonance points (empathy→gratitude→hope in three waves); ④Turning point showing "how" (specific methodology, not chicken soup); ⑤Growth resolution giving audiences something actionable. Each video gets a dedicated hook preset + guided question list + emotion curve map. In the launch phase, incomplete storytelling is fatal — fragmented narratives kill credibility.',
  },
  {
    icon: '🔍',
    titleCn: '坦诚复盘，结果导向',
    titleEn: 'Radical Candor, Results-Driven',
    descCn: '建立"结果导向&坦诚复盘"的团队文化。数据不好不回避、问题不甩锅。每周例会同步数据、拆解问题、更新方法论。复盘的目的是迭代，不是追责。',
    descEn: 'Build a "results-driven & radical candor" culture. Don\'t hide bad data, don\'t shift blame. Weekly syncs on metrics, problem decomposition, and methodology updates. Reviews are for iteration, not blame.',
  },
];

// Grid span configuration for each card (desktop only, mobile is always 1x1)
const gridSpanClasses = [
  'md:col-span-2 md:row-span-1', // Card 0: 四大平台起号
  'md:col-span-1 md:row-span-1', // Card 1: 付费投放
  'md:col-span-1 md:row-span-2', // Card 2: 赢者通吃 (spans 2 rows on desktop)
  'md:col-span-1 md:row-span-1', // Card 3: 用户链路
  'md:col-span-1 md:row-span-1', // Card 4: 0到1团队
  'md:col-span-2 md:row-span-1', // Card 5: 业务模型迭代
  'md:col-span-2 md:row-span-1', // Card 6: 爆款人物故事
  'md:col-span-1 md:row-span-1', // Card 7: 坦诚复盘
];

function PhilosophyCard({ item, index }: { item: typeof philosophies[0]; index: number }) {
  const { ref, isVisible } = useInView(0.1);
  const spanClass = gridSpanClasses[index];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group relative bg-[#0a1120] border border-white/[0.08] hover:border-[#00d4ff]/30 transition-all duration-300 p-4 md:p-5 col-span-1 row-span-1 ${spanClass}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div className="text-2xl md:text-3xl mb-3">{item.icon}</div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-bold text-white mb-1">{item.titleCn}</h3>
      <p className="text-xs text-[#00d4ff] mb-3 italic">{item.titleEn}</p>

      {/* Description */}
      <p className="text-sm text-white/80 leading-relaxed mb-2">{item.descCn}</p>
      <p className="text-xs text-white/50 leading-relaxed">{item.descEn}</p>
    </div>
  );
}

export default function WorkPhilosophy() {
  const { ref: titleRef, isVisible: titleVisible } = useInView(0.2);

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: '#050a14' }}>
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6">
        {/* Title */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className="text-center mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            业务反思与方法论
          </h2>
          <p className="text-sm text-[#00d4ff] italic max-w-3xl mx-auto">
            Behind the Glamour Numbers: Painful Lessons from the Market. If You&apos;re Interested, Let&apos;s Talk.
          </p>
        </div>

        {/* Philosophy Cards - Bento Grid Layout (no gaps, border-separated) */}
        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 0 }}
        >
          {philosophies.map((item, index) => (
            <PhilosophyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
