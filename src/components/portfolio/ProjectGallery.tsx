'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// 海外社媒矩阵
const socialMediaMatrix = [
  { platform: 'TikTok', accounts: '12个', followers: '120万+', color: 'bg-pink-500/20 text-pink-300' },
  { platform: 'Instagram', accounts: '8个', followers: '85万+', color: 'bg-purple-500/20 text-purple-300' },
  { platform: 'YouTube', accounts: '7个', followers: '55万+', color: 'bg-red-500/20 text-red-300' },
  { platform: 'Facebook', accounts: '6个', followers: '25万+', color: 'bg-blue-500/20 text-blue-300' },
];

// 成功案例
const successCases = [
  {
    name: '小龙女',
    followers: '1.1M',
    period: '9个月',
    platforms: '跨4平台',
    highlight: '单账号最高33.7万粉丝',
  },
  {
    name: '青云',
    followers: '1M',
    period: '8个月',
    platforms: '跨4平台',
    highlight: '首6周突破10万粉丝',
  },
  {
    name: 'Kyran',
    followers: '800K',
    period: '4个月',
    platforms: '跨4平台',
    highlight: '单条视频200万播放',
  },
];

// 爆款视频结构
const videoStructures = [
  { type: '痛点直戳型', desc: '开门见山点出用户痛点' },
  { type: '数字承诺型', desc: '用具体数字建立可信度' },
  { type: '错误示范对比型', desc: '对比前后效果' },
  { type: '故事代入型', desc: '真实案例引发共鸣' },
  { type: '节奏跟练型', desc: '沉浸式跟练体验' },
];

// 带货视频结构
const salesVideoStructures = [
  { type: '价值前置型', desc: '先给价值再谈产品' },
  { type: '痛点升级型', desc: '痛点放大后再给方案' },
  { type: '故事成交型', desc: '真实用户故事' },
  { type: '对比纠错型', desc: '错误vs正确做法' },
  { type: '沉浸跟练型', desc: '课程内容预览' },
];

export function ProjectGallery() {
  return (
    <section id="projects" className="px-6 py-8 md:py-10">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-foreground">项目成果</h2>
          <p className="text-base text-muted-foreground">海外社媒矩阵与增长案例</p>
        </div>

        {/* 海外社媒矩阵 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            海外社媒矩阵 0→285万粉丝
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            9个月从0搭建33个跨平台账号，月均产出150-200条短视频，爆款50+条
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialMediaMatrix.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-4 text-center">
                  <Badge className={`${item.color} mb-2`}>{item.platform}</Badge>
                  <div className="text-2xl font-bold text-foreground">{item.followers}</div>
                  <div className="text-xs text-muted-foreground">{item.accounts}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 成功案例 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            成功案例
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {successCases.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground">{item.name}</h4>
                    <Badge className="bg-primary/20 text-primary">{item.period}</Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{item.followers}</div>
                  <div className="text-sm text-muted-foreground mb-2">{item.platforms}</div>
                  <div className="text-xs text-primary font-medium">{item.highlight}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 爆款视频结构 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            爆款视频5种结构
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {videoStructures.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-3 text-center">
                  <div className="text-2xl mb-2">🎬</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.type}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 带货视频结构 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            带货视频5种结构
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {salesVideoStructures.map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-3 text-center">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{item.type}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* TAICHI YOUNG独立站 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            TAICHI YOUNG独立站
          </h3>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Shopify品牌站</div>
                  <div className="text-lg font-semibold text-foreground">从0-1搭建</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">客单价</div>
                  <div className="text-lg font-semibold text-foreground">$6 - $499</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">月均销售额</div>
                  <div className="text-lg font-semibold text-primary">$30万+</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border text-center">
                <span className="text-sm text-muted-foreground">LTV/CAC &gt; </span>
                <span className="text-lg font-bold text-primary">3</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
