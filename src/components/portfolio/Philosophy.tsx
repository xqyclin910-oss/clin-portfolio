'use client';

import { cn } from '@/lib/utils';

// 三个核心观点
const corePoints = [
  {
    number: '01',
    text: '从更本质、更贴近人性的角度理解用户需求',
  },
  {
    number: '02',
    text: '对满足同一个需求提出了更本质、更贴近人性的解决方案',
  },
  {
    number: '03',
    text: '想到办法，把这个方案落到对用户的产品和服务中',
  },
];

// 企业家需求框架
const entrepreneurNeeds = [
  {
    category: '健康',
    color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400',
    items: ['健康管理', '精力管理', '心力提升'],
  },
  {
    category: '资源',
    color: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
    items: ['上下游合作', '同行互补', '跨界启发'],
  },
  {
    category: '情报',
    color: 'bg-purple-500/20 border-purple-500/40 text-purple-400',
    items: ['前沿趋势判断', '商业模式迭代', '思维框架更新'],
  },
  {
    category: '人力资源',
    color: 'bg-orange-500/20 border-orange-500/40 text-orange-400',
    items: ['管理培训的大多数都是为了解决这个问题，实际上并不是老板要知道怎么做'],
  },
  {
    category: '影响力',
    color: 'bg-pink-500/20 border-pink-500/40 text-pink-400',
    items: ['IP', '圈层', '社会价值'],
  },
  {
    category: '情感',
    color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400',
    items: ['孤独被理解', '成就被看见', '找到同类'],
  },
];

export function Philosophy() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0f1a]">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* 大标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-12 text-center">
          什么是好的产品
        </h2>

        {/* 三个核心观点 - PC端一行排列 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
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
        <div className="mb-12 p-6 md:p-8 rounded-lg bg-[#1e293b]/30 border border-[#334155]/30">
          <p className="text-[#94a3b8] text-base md:text-lg leading-relaxed">
            那么如何理解企业家的需求？很多课程产品经理容易将企业家看成一个好学生，实际上我们要像理解一个立体的人来理解企业家，企业家的需求划分大致是：
          </p>
        </div>

        {/* 企业家需求框架 */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-[#e2e8f0] mb-8 text-center">
            企业家需求框架
          </h3>
          
          {/* 6大类需求 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {entrepreneurNeeds.map((need, index) => (
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
              </div>
            ))}
          </div>
        </div>

        {/* 底部金句 */}
        <div className="mb-8 text-center">
          <p className="text-xl md:text-2xl font-medium text-[#94a3b8] italic">
            一个好的设计并不一定成就一个爆品
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
              爆品公式
            </span>
          </div>
          
          {/* 公式内容 */}
          <div className="text-center relative z-10">
            <div className="inline-flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg md:text-2xl lg:text-3xl font-bold">
              {/* 左侧 */}
              <span className="text-[#e2e8f0]">爆品</span>
              <span className="text-[#3b82f6]">=</span>
              
              {/* 第一组括号 */}
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#3b82f6] text-2xl md:text-3xl">(</span>
                <span className="text-[#e2e8f0]">热点挖掘</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">流量扶持</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">用户炫耀</span>
                <span className="text-[#3b82f6] text-2xl md:text-3xl">)</span>
              </div>
              
              {/* 乘号 */}
              <span className="text-[#3b82f6] text-2xl md:text-3xl">×</span>
              
              {/* 第二组括号 */}
              <div className="flex items-center gap-1 md:gap-2">
                <span className="text-[#3b82f6] text-2xl md:text-3xl">(</span>
                <span className="text-[#e2e8f0]">制造峰值</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">克制设计</span>
                <span className="text-[#94a3b8]">+</span>
                <span className="text-[#e2e8f0]">敏捷迭代</span>
                <span className="text-[#3b82f6] text-2xl md:text-3xl">)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}