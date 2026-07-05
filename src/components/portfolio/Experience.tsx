'use client';

import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: '博商管理科学研究院股份有限公司',
    role: '美区线上业务负责人',
    period: '2024.12 - 2026.05（1.5年）',
    achievements: [
      '将产品卖点逐层拆解为可测试的内容方向，按流量型/专业型/营销型三类分层，配合FB付费投放验证CTR、CPC、转化率，筛选高转化卖点反哺自然流选题，单月单IP获取新线索1000+',
      '围绕3个核心IP搭建33个社媒账号矩阵，沉淀4大平台起号SOP，前1.5个月单账号自然流突破10万粉丝，后续月均涨粉10-15万，累计285万海外粉丝',
      '组建20人中美跨文化团队，从0建立美区Agency合作网络',
      '引入数字人、声音克隆、全AI视频等AI工具流，实现团队3倍提效',
      '自建Shopify独立站跑通"内容引流→私域转化→复购"链路，客单价6-499美金，月均销售额30万+（美金），LTV/CAC>3',
    ],
  },
  {
    company: '博商管理科学研究院股份有限公司',
    role: '产品经理',
    period: '2022.07 - 2024.12（2.5年）',
    achievements: [
      '主导《创业增长实战营》《AI+短视频获客快训营》等课程产品从定义到市场结果和交付管理的全过程',
      '训练营服务学员2000+，年私域销售额800万；录播课程服务学员100万+，年公域销售额2亿；PMF 2.05',
      '首款产品3个月将NPS从47%提升至100%，后续产品NPS维持80%+',
      '沉淀产品设计、开发流程、经济模型、磨课流程、制片流程等组织资产',
    ],
  },
  {
    company: '解决一个问题科技（深圳）有限公司',
    role: '内容项目经理（企业培训、游学与轻咨询）',
    period: '2021.08 - 2022.06',
    achievements: [
      '开发资源与设计交付头部企业分享和游学项目，客户包括腾讯、字节、小鹏汽车、TGO、好买基金等，平均NPS 15%，项目营收120万',
      '主导《lululemon-如何打造使命驱动的品牌》企业分享项目，交付传音、天安、小鹏等企业',
      '参与《lululemon x 奶糖派》品牌咨询项目，包括前期调研、目标设计、工作坊设计和课件设计',
    ],
  },
  {
    company: '好未来教育科技集团',
    role: '学而思总部英语产品学科运营',
    period: '2020.09 - 2021.08',
    achievements: [
      '全国线下高端英语产品《未来体系》课研与市场材料优化，续报率从86%提升到90%+',
      '《国家地理原版阅读成长体系》的研发材料与市场发行材料制作，全国4个城市招生暑期3500+',
      '管理两款产品5000+社群学员，组织2次高端沙龙、2场作者直播、1次全国巡回英语演讲大会',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-8 md:py-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* 标题 */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            职业经历
          </h2>
          <p className="text-lg text-muted-foreground">
            从课程产品经理到海外社媒内容策略
          </p>
        </div>

        {/* 时间轴 */}
        <div className="relative">
          {/* 竖线 */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          {/* 经历列表 */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-start md:items-center gap-4`}
              >
                {/* 时间节点 */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 mt-6 md:mt-0 z-10" />

                {/* 内容卡片 */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                    {/* 公司名 */}
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {exp.company}
                    </h3>
                    {/* 职位和时间 */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-primary">
                        {exp.role}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    {/* 成果列表 */}
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
