import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// 文章数据
const articles: Record<string, { title: string; content: string }> = {
  'how-to-write-script': {
    title: '内容的第一步是学会说人话——如何写好课程逐字稿',
    content: `
## 撰写顺序参考

1. 确认本节课，学员的起点和终点
   - 起点：学员在听课之前，水平如何，对这个课题有怎样的认知、怎样的疑惑、期待在这节课解决什么问题
   - 终点：这节课能提供给学员什么核心知识，该知识能帮助学员解决什么问题，如果非要选一份小抄、你希望学员带走什么（takeaway）？

2. 先确定解决方案，即讲方法部分的知识框架，最好能建个好记得模型、画个模型图、编个顺口溜

3. 结合核心知识模型和学员的真实痛点，倒推课程的立挑战，立挑战可以用以下几种形式
   - 给出一个问题情境，给出几个选项，剖析问题，给出本节课程的方法
   - 讲述一个真实的案例，让学员设想如果是你会怎么做，剖析常见问题，给出本节课程核心观点
   - 编撰一个难题场景，邀请学员开放式作答，给出常见的解体思路，分析其中的误区，认知反转，引出本课的核心观点

4. 做预告部分本身是个流畅过度，帮助学员定位（拢一拢耳音），预览本节课核心内容即可

5. 讲方法部分更像是写故事，呈现出现问题-解决问题-得出结论的形式，故事最好有冲突，有反转，有感性内容

6. 帮总结要和核心解决方案相呼应

7. 留练习的本质是让学员思考，觉得本节课的东西有希望平移到现实生活中，可以是完成一个工具、回答一个思考题、做一件现实生活中的事情

---

## 如何用好口语化表达？

### 入门：添加语气字词

最古老，也是最基础的口语化表达方法。这个方法最容易操作，只要在句子里面，适当的去添加一些语气词，比如像：呢、么、吧、吗、嗯这样的字词就可以了。

### 初级：书面用词口语化，改掉复杂句式

**1）识别书面用词**：需要我们把稿子念出来，找出那些在真正和人用说话的方式交流时，不会说的那些词

**2）将书面用词，转化成口语表达**：
- 与 → 和
- 使 → 让
- 由于 → 因为
- 其次 → 之后
- 而言 → 来说
- 此前 → 在这之前
- 比如 → 比如说/像
- 如下图 → 像下面这张图

**3）改掉复杂句式（长句变短句）**

为什么只用看的很难检查出稿子是否口语化：大多数人用眼睛去看文章的时候，不会从一行的第一个字开始，逐字浏览，而是浏览一个区域的文字。而且在看的时候，有不理解的部分，可以跳过去重新看。因此，当遇到比较长、比较复杂的句子，也能够理解。

长句主要有三个特点：修饰语多；并列成分多；句子结构复杂
- 过长的句子，拆成几个短句
- 把多层逻辑，改成单层逻辑
- 删掉没有实际意义的形容词

### 高级：打个好比方

为什么我们打不出好比方？自己真正掌握了解的东西，才能举出恰当的例子。那些自己都模棱两可的内容，基本上就会写术语，跳过举例这个环节。

能否举出恰当的例子，是检查自己知识掌握程度的方法，也是一个判定课程好坏的标准。现在市面上有很多看似很有道理，但实际说的是空话、废话的课程。这些课都有一个特点，要么语焉不详，要么例子牵强。

怎样练习打比方的能力——勤记笔记。遇到好的案例，要像看到500万一样，两眼放光，赶紧给记下来。没事就翻一翻，在遇到类似情况的时候，拿出来用一用。这门手艺是越用越熟练。

### 进阶：勾起用户的内心戏

面对面的交流，你有什么问题，老师马上给你解答，在听答案的过程当中，你有什么疑问，也可以马上提出来，老师会接着给你解答。

线上课虽然做不到及时的互动，但是也要让用户感受到，咱们是在有温度的交流。

比如说，我们讲中国生育率创新低，少年比老年人少。这和1990年的日本差不多。听到这，用户心里可能会想，1990年的日本咋了？有什么特点呢？我就应该马上给出答案，那个时候的日本经济，处于长期低迷的状态。

那用户可能马上又会想，那中国经济，会不会也因为人口的趋势，重蹈日本的覆辙？我就要在课程里帮用户说出这个问题，再给你一个解答。

除了时刻注意对象感，我们还能：人为制造坡度。其实就是勾起别人的好奇心，以及出人意料的反转。制造悬念，如果有条件再来个反转，效果会更好。

---

## 写稿时有哪些技巧可以提高效率？

- 好的资料来源：首选让Kimi帮忙找，内网找不到外网perplexity找；另外可来自微信生态万字文章、财经报道类网站、研报、得到等平台课程、传播蛙等垂类案例网站、知识星球等经验分享社区、小宇宙等播客、咸鱼可购电子资料
- 写稿时不要听歌，会严重干扰脑内默念，注意，默念十分十分重要
- 先把框架搭好，寄希望于框架而不是灵感
- 先把最核心的大案例找好，拆案例的过程中可能解决方案也会微调
- 先给模型画个草稿，写后面的内容一眼就可以定位检查
- 写完要念一遍！写完要念一遍！写完要念一遍！

---

## 什么是七龙珠式的结构？能举个例子吗？

### 1. 打招呼

同学，你好，我是xx老师，本节课xxx

### 2. 立挑战-情景挑战+剖析本质

概念解释：所谓挑战，就是主体+目标+约束条件。

比如你要讲一门课：介绍北京。

第一种讲法，是按照各种领域，政治、经济、文化、历史、气候、物产、商业，无论怎么介绍，都有挂一漏万之憾。最后，很可能讲成数据和概念的堆砌。

第二种讲法，就是预设一个挑战。比如，假设一个高中生，暑假要到北京玩两天，有500元预算，他希望对北京城的了解最大化，请你替他设计一个包括食宿游购娱各种因素的旅行计划，并解释为什么。

你看，这个题目中就有了主体、目标和约束条件。用户很容易被代入一个挑战性的情境，新知识成了他应对挑战的工具，而不是需要强行记忆的认知负担。

### 3. 做预告-本节内容预告

### 4. 讲方法-总结案例中出现的步骤&方法论

### 5. 给小抄-给个表或者总结性落地工具（复盘笔记）

### 6. 帮总结-课程总结

### 7. 留练习-练习题或者思考题
`,
  },
  'staying-steady-amid-trends': {
    title: '在潮流中稳住脚跟',
    content: `
不少课程产品经理，尤其是对财务结果负责的，从项目筛选开始直至产品上架之后，每天都会被几个问题笼罩：

1. 经典就是经典，人人需要，可是......
2. 潮流千变万化，万一还没等我做完这就不火了咋办
3. 现在大家都关注这个，我还来得及吗
4. 这玩意儿太新了没资料参考啊

我们总觉得有个"大势所趋"，什么"历史的洪流滚滚向前"，总觉得历史有一个方向，有一个终点，历史上发生的事情总有其最终的意义，这个看上去很像经验论，但实际上是我们拿着结果去解释过程。经济发展并非线性连续和自然发生的，它没有"大势所趋"。

---

![潮流趋势](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop)

### 创新的五种范式

实际上真正能够带来经济发展的创新一共有五种范式：

1. **新产品** — 一种新产品，或一种已有产品的新品质
2. **新的生产方式或商业模式**
3. **新市场的开拓** — 这里的新市场指的是尚未打入的市场，是否已经存在这个市场并不重要
4. **新的供应来源** — 占领一种新的原材料/半成品或新的供应来源
5. **新的组织形式** — 行业内一种新的组织形式，比如托拉斯

那么就算我们知道这个创新确实会带来发展，我们也同时会觉得这内容难设计，这是个新的领域我怎么做内容规划？

### 问题树：从客户出发的内容设计

这时候客户的**"问题树"**就非常重要，它总是起始于客户的一个核心目标或者说待解决的问题，从而延伸出一堆因果关系导致的细分问题，我们就是要找到当前解答这些问题的最好资源。

不过很多时候太新的事物，亲历的人自己都没仔细想过事情的发展脉络，那我们又怎么知道要如何选取并且定制内容？

---

![知识体系](https://images.unsplash.com/photo-1507842219432-e47d545a9902?w=800&h=400&fit=crop)

### 学科体系兜底

学科会为我们兜底：

- 战略管理
- 领导力开发
- 团队建设
- 绩效管理
- 变革管理
- 组织文化塑造
- 行业特定技术（如研发、生产）
- 职能技能（财务、营销、人力资源、供应链）
- 数字素养（数据分析、AI应用）
- 职业心态
- 情绪管理
- 商务礼仪
- 谈判技巧
- 冲突解决
- 高效沟通
- 劳动法
- 合规经营
- EHS（环境、健康、安全）管理体系
- 职业道德、企业社会责任

> **爆品公式**
> 一个好的设计并不一定成就一个爆品
> 爆品 = （热点挖掘 + 流量扶持 + 用户炫耀）×（制造峰值 + 克制设计 + 敏捷迭代）
`,
  },
};

// 生成静态页面参数
export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) {
    return {
      title: '文章不存在',
    };
  }
  return {
    title: article.title,
    description: article.title,
  };
}

// 博客详情页组件
export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">文章不存在</h1>
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* 返回按钮 */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base font-medium">返回首页</span>
        </Link>

        {/* 文章标题 */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
          {article.title}
        </h1>

        {/* 文章内容 */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div className="text-foreground/90 leading-relaxed space-y-6">
            {article.content.split('\n').map((line, index) => {
              // 处理标题
              if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">
                    {line.replace('## ', '')}
                  </h2>
                );
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-lg md:text-xl font-semibold text-foreground mt-6 mb-3">
                    {line.replace('### ', '')}
                  </h3>
                );
              }
              // 处理分隔线
              if (line.trim() === '---') {
                return (
                  <hr key={index} className="border-border my-8" />
                );
              }
              // 处理列表项
              if (line.startsWith('- ') || line.match(/^\d+\.\s/)) {
                return (
                  <li key={index} className="text-muted-foreground ml-4 mb-2">
                    {line.replace(/^-\s/, '').replace(/^\d+\.\s/, '')}
                  </li>
                );
              }
              // 处理缩进内容（子列表）
              if (line.startsWith('   - ') || line.startsWith('   ')) {
                return (
                  <li key={index} className="text-muted-foreground ml-8 mb-1 text-sm">
                    {line.replace(/^   -\s/, '').replace(/^   /, '')}
                  </li>
                );
              }
              // 处理粗体文本
              if (line.includes('**')) {
                const parts = line.split(/\*\*(.*?)\*\*/);
                return (
                  <p key={index} className="text-muted-foreground mb-3">
                    {parts.map((part, i) => 
                      i % 2 === 1 ? (
                        <strong key={i} className="text-foreground font-semibold">{part}</strong>
                      ) : (
                        part
                      )
                    )}
                  </p>
                );
              }
              // 处理普通段落
              if (line.trim() && !line.startsWith('#')) {
                return (
                  <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </article>

        {/* 底部返回按钮 */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-medium">返回首页</span>
          </Link>
        </div>
      </div>
    </div>
  );
}