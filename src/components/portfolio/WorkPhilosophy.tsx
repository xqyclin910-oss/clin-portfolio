'use client';

import { useInView } from '@/hooks/useAnimations';

const philosophies = [
  {
    icon: '🚀',
    titleCn: '内容即增长引擎',
    titleEn: 'Content as the Growth Engine',
    descCn: '不是"做内容为了涨粉"，而是"用内容构建信任链路，让增长自然发生"。9个月285万粉丝矩阵，每一条爆款都是系统验证的结果，不是运气。',
    descEn: 'Not "making content for followers" but "building trust through content to let growth happen organically." Every viral post was a system-validated result, not luck.',
  },
  {
    icon: '🎯',
    titleCn: '先找到对的事，再在对的事里找共通点',
    titleEn: 'Find the Right Thing First, Then Extract Patterns',
    descCn: '核心逻辑——先搞清楚该干什么、不该干什么，然后在对的事情里找共通点复制放大，在错的事情里也找共通点避免重犯。这是所有运营迭代的底层方法论。',
    descEn: 'First clarify what to do and what not to do, then extract replicable patterns from successes and failure modes from mistakes. This is the core of all operational iteration.',
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
    titleCn: '一个贵的人抵三个便宜的人',
    titleEn: 'One Great Hire Beats Three Mediocre Ones',
    descCn: '在跨文化团队管理中，选能复盘、能沟通的人做lead带头创新。一个靠谱的核心成员，产出和影响力远超三个"勉强能用"的人。选人宁缺毋滥。',
    descEn: 'In cross-cultural team management, choose people who can reflect and communicate as leads. One solid core member outperforms three "barely adequate" ones in output and influence.',
  },
  {
    icon: '🔍',
    titleCn: '坦诚复盘，结果导向',
    titleEn: 'Radical Candor, Results-Driven',
    descCn: '建立"结果导向&坦诚复盘"的团队文化。数据不好不回避、问题不甩锅。每周例会同步数据、拆解问题、更新方法论。复盘的目的是迭代，不是追责。',
    descEn: 'Build a "results-driven & radical candor" culture. Don\'t hide bad data, don\'t shift blame. Weekly syncs on metrics, problem decomposition, and methodology updates. Reviews are for iteration, not blame.',
  },
];

function PhilosophyCard({ item, index }: { item: typeof philosophies[0]; index: number }) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="group relative bg-[#0a1120] rounded-xl p-6 border border-border/10 hover:border-[#00d4ff]/30 transition-all duration-300 hover-lift"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease ${index * 80}ms`,
      }}
    >
      {/* Icon */}
      <div className="text-3xl mb-4">{item.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-1">{item.titleCn}</h3>
      <p className="text-xs text-[#00d4ff] mb-4 italic">{item.titleEn}</p>

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
            工作理念与方法论
          </h2>
          <p className="text-sm text-[#00d4ff] italic mb-3">
            Work Philosophy & Methodology
          </p>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">
            在实战中沉淀的思考，驱动每一次关键决策
          </p>
          <p className="text-xs text-white/40 italic">
            Insights forged in practice, driving every critical decision
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {philosophies.map((item, index) => (
            <PhilosophyCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
