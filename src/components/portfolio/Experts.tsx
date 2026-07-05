'use client';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// 成功孵化IP
const incubatedIPs = [
  {
    name: 'Steve Hoffman',
    title: '硅谷创投教父，Founder Space创始人',
    followers: 'IP孵化',
    color: 'bg-primary/20 text-primary',
  },
  {
    name: 'Steven Weathers',
    title: '美国籍媒体人，上海"白玉兰纪念奖"得主',
    followers: 'IP孵化',
    color: 'bg-primary/20 text-primary',
  },
  {
    name: '小龙女',
    title: '1.1M粉丝IP',
    followers: '1.1M',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    name: '青云',
    title: '1M粉丝IP',
    followers: '1M',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    name: 'Kyran',
    title: '800K粉丝IP',
    followers: '800K',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
];

// 合作流程数据
const collaborationStats = [
  { label: '线索筛选', value: '500+', unit: '条' },
  { label: '签约合作', value: '7', unit: '位' },
  { label: '成功起号', value: '5', unit: '位' },
];

// 跨文化团队
const teamInfo = [
  { label: '团队规模', value: '20人', desc: '中美跨文化团队' },
  { label: '岗位覆盖', value: '运营/投放/私域/产品', desc: '全链路覆盖' },
  { label: '合作网络', value: '美区Agency', desc: '深度合作网络' },
];

export function Experts() {
  return (
    <section id="experts" className="py-8 md:py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Creator合作与IP孵化
          </h2>
          <p className="text-secondary text-lg">
            从0帮商业创作者打造个人品牌
          </p>
        </div>

        {/* 成功孵化IP */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            成功孵化IP
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {incubatedIPs.map((ip) => (
              <Card key={ip.name} className="bg-card border-border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={cn('text-xs', ip.color)}>{ip.followers}</Badge>
                  </div>
                  <div className="font-bold text-foreground mb-1">{ip.name}</div>
                  <div className="text-sm text-muted-foreground">{ip.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 合作流程 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            合作流程
          </h3>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {collaborationStats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-3xl font-bold text-primary">{stat.value}</span>
                      <span className="text-sm text-muted-foreground">{stat.unit}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    {index < collaborationStats.length - 1 && (
                      <div className="hidden md:block text-2xl text-muted-foreground/50 mt-2">→</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  全程把控内容方向、完成拍摄、设计账号定位
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 跨文化团队 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            跨文化团队
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamInfo.map((item) => (
              <Card key={item.label} className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
