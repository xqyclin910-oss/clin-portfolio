'use client'

import { cn } from '@/lib/utils'

interface Expert {
  name: string
  title: string
}

interface ExpertCategory {
  title: string
  description: string
  experts: Expert[]
}

const expertCategories: ExpertCategory[] = [
  {
    title: '深度内容研发',
    description: '长期深度合作的专家老师',
    experts: [
      {
        name: 'Flora Zhang',
        title: '前lululemon中国品牌负责人，中国1号员工'
      },
      {
        name: '房家毅',
        title: '挑战者资本首席战略官'
      },
      {
        name: '管任伟',
        title: '博商管理科学研究院院长、联合创始人'
      },
      {
        name: '叶旭东',
        title: '企业短视频运营专家、前字节跳动市场负责人'
      },
      {
        name: 'Steve Hoffman',
        title: '硅谷创投教父、硅谷知名孵化器Founder Space创始人'
      },
      {
        name: 'Zack Kass',
        title: 'OpenAI 前全球商业化负责人'
      },
      {
        name: 'Steven Weathers',
        title: '美国籍媒体人，上海市"白玉兰纪念奖"得主'
      },
      {
        name: 'Aaron Ross',
        title: 'Salesforce 早期核心销售主管及"硅谷销售教父"'
      }
    ]
  },
  {
    title: '单次产品合作',
    description: '参与特定项目合作的专家',
    experts: [
      {
        name: '霍义伍',
        title: '中国实战派企业管理专家，参与麦当劳中国公司创业'
      },
      {
        name: '顾均辉',
        title: '中国定位专家'
      },
      {
        name: '黄博',
        title: '内容电商及社会化营销专家，淘宝联盟首位官方理事长'
      }
    ]
  },
  {
    title: '演讲合作',
    description: '峰会、游学等活动中演讲分享的嘉宾',
    experts: [
      {
        name: 'Paul R. Milgrom',
        title: '2020年诺贝尔经济学奖得主'
      },
      {
        name: 'Howard Behar',
        title: '星巴克执行副总裁'
      },
      {
        name: '度阴山',
        title: '著名历史作家，超级畅销书《知行合一 王阳明》作者'
      },
      {
        name: 'David Brin',
        title: '美国科幻作家，雨果奖得主'
      },
      {
        name: 'Frank Gao',
        title: 'Type-C设计者，苹果开发团队、特斯拉自动驾驶产品总监'
      },
      {
        name: 'William Liu',
        title: '联合创始人兼逸仙电商CTO'
      },
      {
        name: 'Rory',
        title: '逸仙电商新零售事业部总裁'
      },
      {
        name: '赵园园',
        title: '资深电商直播专家、前阿里巴巴淘宝资深运营专家'
      },
      {
        name: '谭睿晖',
        title: '上海申迪集团副总经理，长三角旅游企业联盟副秘书长'
      },
      {
        name: '李丰',
        title: '锋锐资本创始合伙人'
      },
      {
        name: '刘乐',
        title: '芒果TV节目中心制片人，代表作《再见爱人》'
      }
    ]
  }
]

const categoryStyles = [
  {
    badge: 'bg-primary/20 text-primary border-primary/30',
    card: 'bg-primary/5 hover:bg-primary/10'
  },
  {
    badge: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    card: 'bg-amber-500/5 hover:bg-amber-500/10'
  },
  {
    badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    card: 'bg-emerald-500/5 hover:bg-emerald-500/10'
  }
]

export function Experts() {
  return (
    <section className="py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            合作过的老师们
          </h2>
          <p className="text-secondary text-lg">
            与各领域顶尖专家深度合作，共创优质课程内容
          </p>
        </div>

        {/* Expert Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertCategories.map((category, categoryIndex) => {
            const style = categoryStyles[categoryIndex]
            return (
              <div key={category.title} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={cn(
                      'px-3 py-1.5 rounded-full text-sm font-medium border',
                      style.badge
                    )}
                  >
                    {category.title}
                  </span>
                </div>
                <p className="text-secondary text-sm mb-4">
                  {category.description}
                </p>

                {/* Expert List */}
                <div className="space-y-3">
                  {category.experts.map((expert) => (
                    <div
                      key={expert.name}
                      className={cn(
                        'p-4 rounded-lg border border-border/50',
                        'transition-colors duration-150',
                        style.card
                      )}
                    >
                      <div className="font-semibold text-foreground mb-1">
                        {expert.name}
                      </div>
                      <div className="text-secondary text-sm leading-relaxed">
                        {expert.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">8</div>
              <div className="text-secondary text-sm">深度研发专家</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">3</div>
              <div className="text-secondary text-sm">产品合作专家</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">11</div>
              <div className="text-secondary text-sm">演讲嘉宾</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">22+</div>
              <div className="text-secondary text-sm">合作专家总数</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}