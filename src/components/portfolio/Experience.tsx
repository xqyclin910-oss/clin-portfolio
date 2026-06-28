'use client';

import { cn } from '@/lib/utils';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  sections: {
    title?: string;
    period?: string;
    duties?: string[];
    achievements?: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    company: '博商管理科学研究院股份有限公司',
    role: '产品经理 → 美区线上业务负责人',
    period: '2022.07 - 2026.05',
    sections: [
      {
        title: '产品经理',
        period: '2022.07 - 2024.12',
        duties: [
          '课程产品开发与管理：主导《创业增长实战营》、《AI+短视频获客快训营》等课程产品从定义到市场结果和交付管理的全过程。',
          '需求洞察与产品定义：根据宏观分析和市场调研完成画像与课题定义，从媒体声量、潜在用户调研、私域服务触点等渠道细化需求和产品形态',
          '师资开发与管理：运用资源和检索能力，自主挖掘、管理线索并签约专家师资，管理师资预期和财务结果，完成产品定义拉通、磨课和最终交付',
          '课程与服务设计：匹配客户问题树和商业管理学科内容，完成模块和单课终点设计，遵循课程的单元模型萃取专家内容，并根据起点终点与学员动机完成奖励机制、练习和互动反馈设计',
          '产品交付与迭代：主导并作为教练参与课程的交付流程，根据交付数据分析并优化班期内容与服务，对课程的NPS直接负责',
          '产品GTM：主导产品包装、销售渠道拉通、直播转化设计和财务模型测算与优化，对产品PMF直接负责',
        ],
        achievements: [
          '市场成果：训练营服务学员2000+，年私域销售额800万；录播课程服务学员100万+，年公域销售额2亿；PMF 2.05',
          '交付成果：首款产品3个月将NPS从47%提升至100%，后续产品NPS维持80%+；客户实现月询盘信息0到3000增长等，1%学员升单9.8万总裁班',
          '组织成果：沉淀产品设计、开发流程、经济模型、磨课流程、制片流程等组织资产',
        ],
      },
      {
        title: '美区线上业务负责人',
        period: '2024.12 - 2026.05',
        duties: [
          '区域市场开发：从0搭建与管理美区Agency网络和20人中美团队，对部门营收结果全面负责',
          '营收模型搭建与落地：围绕营收链路，定义赛道并签约师资，以项目组开展账号运营和引流转化',
          '内容策略制定与优化：初期打版英文内容生产全流程，后根据创作难点建立业务流程与对应激励机制',
          '团队管理：招聘、培训、管理20人团队，包括短视频运营、投放、私域、产品等岗位，通过数字人、文本生成、声音克隆、全AI视频等流程实现团队3倍提效',
        ],
        achievements: [
          '社媒矩阵成果：围绕三个IP打造33个账号、285万粉丝的海外社媒矩阵，前1.5个月实现单账号自然流10万粉丝，后续月均涨粉10-15万',
          '营收成果：单月单IP新线索1000+，客单价6-499美金，链路LTV/CAC>3，自建独立站月均销售额30万',
        ],
      },
    ],
  },
  {
    company: '解决一个问题科技（深圳）有限公司',
    role: '内容项目经理（企业培训、游学与轻咨询）',
    period: '2021.08 - 2022.06',
    sections: [
      {
        duties: [
          '项目管理: 开发资源与设计交付头部企业分享和游学项目，客户包括腾讯、字节、小鹏汽车、TGO、好买基金等，平均NPS 15%，项目营收120万',
          '内容设计: 主导《lululemon-如何打造使命驱动的品牌》企业分享项目，交付传音、天安、小鹏等企业；参与《lululemon x 奶糖派》品牌咨询项目，包括前期调研、目标设计、工作坊设计和课件设计',
        ],
      },
    ],
  },
  {
    company: '好未来教育科技集团',
    role: '学而思总部英语产品学科',
    period: '2020.09 - 2021.08',
    sections: [
      {
        duties: [
          '学科运营: 全国线下高端英语产品《未来体系》课研与市场材料优化，续报率从86%提升到90%+',
          '新产品GTM: 《国家地理原版阅读成长体系》的研发材料与市场发行材料制作，全国4个城市招生暑期3500+',
          '社群运营: 管理两款产品5000+社群学员，组织2次高端沙龙、2场作者直播、1次全国巡回英语演讲大会',
          '教学: 北京教学点线下授课A+、S产品，学员60人',
        ],
      },
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-4 py-6 md:py-8">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
          职业经历
        </h2>

        {/* 时间轴 */}
        <div className="relative">
          {/* 左侧竖线 */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border md:left-4" />

          {/* 经历列表 */}
          <div className="space-y-4 md:space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-4 md:pl-12">
                {/* 时间节点 */}
                <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary md:left-4 md:w-3 md:h-3" />

                {/* 卡片 */}
                <div className="bg-card border border-border rounded-lg p-4 md:p-5">
                  {/* 公司+职位+时间 */}
                  <div className="mb-3">
                    <h3 className="text-base md:text-lg font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground/80">{exp.role}</span>
                      <span className="text-muted-foreground/60">|</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* 各阶段详情 */}
                  {exp.sections.map((section, sIndex) => (
                    <div key={sIndex} className={sIndex > 0 ? 'mt-4 pt-4 border-t border-border/50' : ''}>
                      {/* 阶段标题（如果有） */}
                      {section.title && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-foreground">{section.title}</span>
                          {section.period && (
                            <span className="text-sm text-muted-foreground">({section.period})</span>
                          )}
                        </div>
                      )}

                      {/* 工作职责 */}
                      {section.duties && section.duties.length > 0 && (
                        <div className="mb-3">
                          <span className="text-sm font-medium text-muted-foreground mb-2 block">
                            工作职责：
                          </span>
                          <ul className="space-y-1.5">
                            {section.duties.map((duty, dIndex) => (
                              <li 
                                key={dIndex} 
                                className="text-sm text-foreground/80 leading-relaxed pl-3 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-muted-foreground"
                              >
                                {duty}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* 核心成果 */}
                      {section.achievements && section.achievements.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-emerald-400 mb-2 block">
                            核心成果：
                          </span>
                          <ul className="space-y-1.5">
                            {section.achievements.map((achievement, aIndex) => (
                              <li 
                                key={aIndex} 
                                className="text-sm text-foreground/80 leading-relaxed pl-3 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-emerald-400"
                              >
                                {/* 高亮数字 */}
                                {achievement.split(/(\d+[+万%])/g).map((part, pIndex) => 
                                  part.match(/^\d+[+万%]$/) ? (
                                    <span key={pIndex} className="font-bold text-emerald-400">{part}</span>
                                  ) : (
                                    part
                                  )
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}