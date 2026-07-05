'use client';

import { cn } from '@/lib/utils';

// 三个核心观点
const corePoints = [
  {
    number: '01',
    text: '将产品卖点逐层拆解为可测试的内容方向，按流量型/专业型/营销型三类分层',
  },
  {
    number: '02',
    text: '配合FB付费投放验证CTR、CPC、转化率，筛选高转化卖点反哺自然流选题',
  },
  {
    number: '03',
    text: '以"月度跑一次完整测试、三个月完成链路搭建"为节奏，逐环节优化转化',
  },
];

// 内容分层策略
const contentStrategy = [
  {
    category: '流量型内容',
    color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400',
    items: ['痛点直戳', '数字承诺', '错误示范对比'],
    goal: '目标：曝光与涨粉',
  },
  {
    category: '专业型内容',
    color: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
    items: ['深度知识输出', '行业洞察', '方法论拆解'],
    goal: '目标：建立权威',
  },
  {
    category: '营销型内容',
    color: 'bg-purple-500/20 border-purple-500/40 text-purple-400',
    items: ['价值前置', '痛点升级', '故事成交'],
    goal: '目标：转化与留资',
  },
  {
    category: '数据验证',
    color: 'bg-orange-500/20 border-orange-500/40 text-orange-400',
    items: ['FB投放测试CTR/CPC', 'A/B测试选题', '转化漏斗优化'],
    goal: '目标：精准决策',
  },
  {
    category: '平台SOP',
    color: 'bg-pink-500/20 border-pink-500/40 text-pink-400',
    items: ['TikTok', 'YouTube', 'Instagram', 'Facebook'],
    goal: '目标：可复制增长',
  },
  {
    category: '转化闭环',
    color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400',
    items: ['内容引流→私域转化→复购', 'Shopify独立站D2C链路'],
    goal: '目标：商业变现',
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="py-8 md:py-10 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* 大标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-6 text-center">
          内容策略如何驱动增长
        </h2>

        {/* 三个核心观点 - PC端一行排列 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
          {corePoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 md:p-6 rounded-lg bg-[#1e293b]/50 border border-[#334155]/50 hover:border-[#3b82f6]/30 transition-colors duration-200"
            >
              {/* 编号 */}
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center mb-4">
                <span className="text-[#3b82f6] font-bold text-lg md:text-xl">
                  {point.number}
                </span>
              </div>
              {/* 观点文字 */}
              <p className="text-[#e2e8f0] text-base md:text-lg leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        {/* 过渡段 */}
        <div className="mb-6 p-6 md:p-8 rounded-lg bg-[#1e293b]/30 border border-[#334155]/30">
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            海外社媒运营的核心不是发内容，而是用数据驱动内容决策。以下是我们的内容分层策略：
          </p>
        </div>

        {/* 内容分层策略 */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#e2e8f0] mb-8 text-center">
            内容分层策略
          </h3>
          
          {/* 6大类需求 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {contentStrategy.map((need, index) => (
              <div
                key={index}
                className={cn(
                  'p-4 md:p-5 rounded-lg border',
                  need.color
                )}
              >
                {/* 类别名称 */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={cn(
                    'inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold',
                    need.color.replace('/20', '/30').replace('/40', '/50')
                  )}>
                    {index + 1}
                  </span>
                  <h4 className="font-semibold text-lg">
                    {need.category}
                  </h4>
                </div>
                
                {/* 子项目 */}
                <ul className="space-y-2">
                  {need.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-[#94a3b8] leading-relaxed pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-current">
                      {item}
                    </li>
                  ))}
                </ul>
                
                {/* 目标 */}
                <p className="mt-3 text-xs font-medium text-current opacity-80">
                  {need.goal}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 底部金句 */}
        <div className="mb-8 text-center">
          <p className="text-xl md:text-2xl font-medium text-[#94a3b8] italic">
            内容不是目的，增长才是
          </p>
        </div>

        {/* 爆品公式 */}
        <div className="relative overflow-hidden rounded-xl p-6 md:p-10 bg-gradient-to-br from-[#3b82f6]/10 via-[#1e293b] to-[#0f172a] border border-[#3b82f6]/30">
          {/* 背景装饰 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b82f6]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#3b82f6]/5 rounded-full blur-2xl" />
          
          {/* 公式标题 */}
          <div className="text-center mb-4 md:mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 text-[#3b82f6] font-semibold text-sm md:text-base">
              增长引擎
            </span>
          </div>
          
          {/* 公式内容 */}
          <div className="text-center relative z-10">
            <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-2xl lg:text-3xl font-bold">
              {/* 左侧 */}
              <span className="text-[#e2e8f0]">增长引擎</span>
              <span className="text-[#3b82f6]">=</span>
              
              {/* 第一组括号 */}
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#3b82f6] text-2xl md:text-3xl">(</span>
                <span className="text-[#e2e8f0]">卖点拆解</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">内容分层</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">数据验证</span>
                <span className="text-[#3b82f6] text-2xl md:text-3xl">)</span>
              </div>
              
              {/* 乘号 */}
              <span className="text-[#3b82f6] text-2xl md:text-3xl">×</span>
              
              {/* 第二组括号 */}
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#3b82f6] text-2xl md:text-3xl">(</span>
                <span className="text-[#e2e8f0]">平台SOP</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">转化闭环</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">持续迭代</span>
                <span className="text-[#3b82f6] text-2xl md:text-3xl">)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}