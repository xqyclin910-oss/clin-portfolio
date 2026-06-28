import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';

// 文章数据
const articles: Record<string, { 
  title: string; 
  date: string;
  tags: string[];
  content: React.ReactNode;
}> = {
  'how-to-write-script': {
    title: '【心经】如何写出七龙珠式逐字稿',
    date: '2026-06-28',
    tags: ['逐字稿', '方法论'],
    content: (
      <>
        {/* 撰写顺序参考 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">撰写顺序参考</h2>
          <div className="space-y-4">
            {[
              { num: 1, title: '确认本节课，学员的起点和终点', items: ['起点：学员在听课之前，水平如何，对这个课题有怎样的认知、怎样的疑惑、期待在这节课解决什么问题', '终点：这节课能提供给学员什么核心知识，该知识能帮助学员解决什么问题，如果非要选一份小抄、你希望学员带走什么（takeaway）？'] },
              { num: 2, title: '先确定解决方案', desc: '即讲方法部分的知识框架，最好能建个好记得模型、画个模型图、编个顺口溜' },
              { num: 3, title: '倒推课程的立挑战', desc: '结合核心知识模型和学员的真实痛点，可以用以下几种形式：', items: ['给出一个问题情境，给出几个选项，剖析问题，给出本节课程的方法', '讲述一个真实的案例，让学员设想如果是你会怎么做，剖析常见问题，给出本节课程核心观点', '编撰一个难题场景，邀请学员开放式作答，给出常见的解题思路，分析其中的误区，认知反转，引出本课的核心观点'] },
              { num: 4, title: '做预告', desc: '部分本身是个流畅过度，帮助学员定位（拢一拢耳音），预览本节课核心内容即可' },
              { num: 5, title: '讲方法', desc: '部分更像是写故事，呈现出现问题-解决问题-得出结论的形式，故事最好有冲突，有反转，有感性内容' },
              { num: 6, title: '帮总结', desc: '要和核心解决方案相呼应' },
              { num: 7, title: '留练习', desc: '的本质是让学员思考，觉得本节课的东西有希望平移到现实生活中，可以是完成一个工具、回答一个思考题、做一件现实生活中的事情' },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm">
                  {item.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  {item.desc && <p className="text-muted-foreground">{item.desc}</p>}
                  {item.items && (
                    <ul className="mt-2 space-y-1 ml-4 list-disc text-muted-foreground">
                      {item.items.map((i, idx) => <li key={idx}>{i}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 如何用好口语化表达 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">如何用好口语化表达？</h2>

          {/* 入门 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">入门：添加语气字词</h3>
            <p className="text-muted-foreground leading-relaxed">
              最古老，也是最基础的口语化表达方法。只要在句子里面，适当添加一些语气词，比如呢、么、吧、吗、嗯就可以了。
            </p>
          </div>

          {/* 初级 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">初级：书面用词口语化，改掉复杂句式</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium text-foreground mb-2">1）识别书面用词</p>
                <p className="text-muted-foreground">把稿子念出来，找出那些在真正和人用说话的方式交流时，不会说的那些词。</p>
              </div>

              <div>
                <p className="font-medium text-foreground mb-2">2）将书面用词，转化成口语表达</p>
                <p className="text-muted-foreground mb-2">举几个例子：</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  {['与 → 和', '使 → 让', '由于 → 因为', '其次 → 之后', '而言 → 来说', '此前 → 在这之前', '比如 → 比如说/像', '如下图 → 像下面这张图'].map((pair, idx) => (
                    <div key={idx} className="px-3 py-2 rounded bg-card/50 border border-border">
                      {pair}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-medium text-foreground mb-2">3）改掉复杂句式（长句变短句）</p>
                <p className="text-muted-foreground mb-3">
                  为什么只用看的很难检查出稿子是否口语化：大多数人用眼睛去看文章的时候，不会从一行的第一个字开始逐字浏览，而是浏览一个区域的文字。看的时候有不理解的部分，可以跳过去重新看。因此当遇到比较长、比较复杂的句子，也能够理解。
                </p>
                <p className="text-muted-foreground mb-2">长句主要有三个特点：修饰语多；并列成分多；句子结构复杂。</p>
                <ul className="space-y-1 ml-4 list-disc text-muted-foreground">
                  <li>过长的句子，拆成几个短句</li>
                  <li>把多层逻辑，改成单层逻辑</li>
                  <li>删掉没有实际意义的形容词</li>
                </ul>
              </div>
            </div>

            {/* 说人话示例卡片 */}
            <div className="mt-6 p-4 rounded-lg bg-amber-50/10 border border-amber-200/20">
              <p className="font-semibold text-foreground mb-4">【说人话示例】</p>
              <div className="space-y-3">
                {[
                  { bad: '打通全域营销转化链路', good: '从大家熟悉平台，抖音、快手、视频号、小红书之类的，引导客户留下电话或者拍下引流产品，再做升单和转推荐' },
                  { bad: '海量分发素材', good: '多平台、多发短视频和图文，就像在线上见人就发传单' },
                  { bad: '销售目标拆解清晰', good: '你的销售明天上班，打开手机就知道去哪里找客户' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex-1 p-3 rounded bg-red-50/20 border border-red-200/30">
                      <XCircle className="w-4 h-4 text-red-500 mb-1" />
                      <p className="text-sm text-red-700/80">{item.bad}</p>
                    </div>
                    <div className="flex-1 p-3 rounded bg-green-50/20 border border-green-200/30">
                      <CheckCircle className="w-4 h-4 text-green-500 mb-1" />
                      <p className="text-sm text-green-700/80">{item.good}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 金字塔图片 */}
          <div className="mb-6 flex justify-center">
            <Image 
              src="/assets/blog_pyramid.png"
              alt="口语化表达金字塔"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* 高级 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">高级：打个好比方</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              为什么我们打不出好比方？自己真正掌握了解的东西，才能举出恰当的例子。那些自己都模棱两可的内容，基本上就会写术语，跳过举例这个环节。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              能否举出恰当的例子，是检查自己知识掌握程度的方法，也是一个判定课程好坏的标准。
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="font-semibold text-foreground mb-2">怎样练习打比方的能力——勤记笔记</p>
              <p className="text-muted-foreground">
                遇到好的案例，要像看到500万一样，两眼放光，赶紧给记下来。没事就翻一翻，在遇到类似情况的时候，拿出来用一用。这门手艺是越用越熟练。
              </p>
            </div>
          </div>

          {/* 进阶 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">进阶：勾起用户的内心戏</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              面对面交流，有什么问题老师马上给你解答。线上课虽然做不到及时的互动，但也要让用户感受到，咱们是在有温度的交流。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              比如我们讲中国生育率创新低，少年比老年人少。这和1990年的日本差不多。听到这，用户心里可能会想，1990年的日本咋了？有什么特点呢？我就应该马上给出答案，那个时候的日本经济，处于长期低迷的状态。
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              那用户可能马上又会想，那中国经济会不会也因为人口的趋势，重蹈日本的覆辙？我就要在课程里帮用户说出这个问题，再给你一个解答。
            </p>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="font-semibold text-foreground mb-2">除了时刻注意对象感，我们还能：人为制造坡度</p>
              <p className="text-muted-foreground mb-2">
                其实就是勾起别人的好奇心，以及出人意料的反转。
              </p>
              <ul className="ml-4 list-disc text-muted-foreground">
                <li>制造悬念，如果有条件再来个反转，效果会更好</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 写稿技巧 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">写稿时有哪些技巧可以提高效率？</h2>
          <ul className="space-y-3 ml-4 list-disc text-muted-foreground">
            <li>好的资料来源：首选让Manus帮忙找，找不到perplexity找；另外可来自微信生态万字文章、财经报道类网站、研报、得到等平台课程、传播蛙等垂类案例网站、知识星球等经验分享社区、小宇宙等播客、咸鱼可购电子资料</li>
            <li>写稿时不要听歌，会严重干扰脑内默念，注意，默念十分十分重要</li>
            <li>先把框架搭好，寄希望于框架而不是灵感</li>
            <li>先把最核心的大案例找好，拆案例的过程中可能解决方案也会微调</li>
            <li>先给模型画个草稿，写后面的内容一眼就可以定位检查</li>
            <li className="font-semibold text-foreground">写完要念一遍！写完要念一遍！写完要念一遍！</li>
          </ul>
        </section>

        {/* 七龙珠结构 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-6">什么是七龙珠式的结构？能举个例子吗？</h2>

          {[
            { num: 1, title: '打招呼', desc: '同学，你好，我是xx老师，本节课xxx' },
            { num: 2, title: '立挑战', desc: '情景挑战 + 剖析本质', hasDetail: true },
            { num: 3, title: '做预告', desc: '本节内容预告' },
            { num: 4, title: '讲方法', desc: '总结案例中出现的步骤 & 方法论', hasMethod: true },
            { num: 5, title: '给小抄', desc: '给个表或者总结性落地工具' },
            { num: 6, title: '帮总结', desc: '课程总结' },
            { num: 7, title: '留练习', desc: '练习题或者思考题，大家听完课记得动动手，光听不是你的，有输出才有收获' },
          ].map((step) => (
            <div key={step.num} className="mb-6">
              <div className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                  {step.num}
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">— {step.desc}</p>
                </div>
              </div>

              {/* 步骤2详细内容 */}
              {step.num === 2 && step.hasDetail && (
                <div className="mt-4 ml-11 space-y-4">
                  <div className="p-4 rounded-lg bg-card/50 border border-border">
                    <p className="font-medium text-foreground mb-2">概念解释</p>
                    <p className="text-muted-foreground">所谓挑战，就是主体+目标+约束条件。</p>
                  </div>

                  <p className="text-muted-foreground">
                    比如你要讲一门课：介绍北京。
                  </p>
                  <p className="text-muted-foreground">
                    第一种讲法，是按照各种领域，政治、经济、文化、历史、气候、物产、商业，无论怎么介绍，都有挂一漏万之憾。最后，很可能讲成数据和概念的堆砌。
                  </p>
                  <p className="text-muted-foreground">
                    第二种讲法，就是预设一个挑战。比如，假设一个高中生，暑假要到北京玩两天，有500元预算，他希望对北京城的了解最大化，请你替他设计一个包括食宿游购娱各种因素的旅行计划，并解释为什么。
                  </p>
                  <p className="text-muted-foreground">
                    你看，这个题目中就有了主体、目标和约束条件。用户很容易被代入一个挑战性的情境，新知识成了他应对挑战的工具，而不是需要强行记忆的认知负担。
                  </p>
                  <p className="text-muted-foreground mb-3">
                    这种方法在新型的学校教育中已经被广泛应用。
                  </p>

                  {/* 美国小学生案例 */}
                  <blockquote className="p-4 rounded-lg bg-primary/5 border-l-4 border-primary text-muted-foreground italic">
                    比如美国小学生的一个营养课设计：
                    <br /><br />
                    由于我们一直在学习有关营养的知识，户外教育中心的野营主管请求我们为下半年为期三天的户外教育中心旅行设计一个营养均衡的菜单。请利用美国农业部食品指南和食品标签上的营养成分表来设计一个为期三天的饮食计划，其中包括三份正餐和三份小吃（上午、下午和篝火晚会）。你的目标是设计一份健康且美味的菜单。除了菜单，请给主管写一封信，解释你的菜单为何符合美国农业部的营养指南，并请附上一张包括脂肪、蛋白质、碳水化合物、维生素、矿物质和卡路里的细目表。最后，还需要解释你如何做到让菜单足够美味，激发起参加野营的学生的食欲。
                  </blockquote>

                  {/* 参考案例 */}
                  <div className="p-4 rounded-lg bg-amber-50/10 border border-amber-200/20">
                    <p className="font-semibold text-foreground mb-3">参考案例：玩赚短视频第2课</p>
                    <p className="text-muted-foreground mb-3">
                      在课程开始前，我想请你思考一个问题：假如说，你有一条带货母婴用品的视频，发布在这四个平台上，抖音点赞300，快手点赞180，小红书点赞25，视频号点赞20，你能看出来应该关注哪个平台吗？
                    </p>
                    <p className="text-muted-foreground mb-2">这背后有几个原理：</p>
                    <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                      <li>从流量池大小来看，抖音本来就是最大的流量池，对于抖音来说，这个数据只能说是及格以上，而这个数据对于小红书来说，已经足够出圈</li>
                      <li>从用户画像上来看，抖音的画像男女较均衡且偏年轻化，而视频号里却是宝妈比较多，视频号这20个赞的含金量，可能比抖音这300个赞要高</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">
                      所以我们说，理解平台，或者全平台分发，背后绝对不是发着试试这么简单，有些平台对你来说，根本就没有运营的必要，而有些平台你应该尽早布局变现链路，但你却根本不了解。
                    </p>
                  </div>
                </div>
              )}

              {/* 步骤3 */}
              {step.num === 3 && (
                <div className="mt-4 ml-11">
                  <p className="text-muted-foreground">
                    所以本节课，我不仅会给大家揭秘4大平台的特点：他们喜欢什么内容、鼓励什么行为，还会告诉大家一个方法，帮助来自不同行业、不同规模的你们，确定短视频发力的主战场。
                  </p>
                </div>
              )}

              {/* 步骤4 */}
              {step.num === 4 && step.hasMethod && (
                <div className="mt-4 ml-11 space-y-4">
                  <p className="text-muted-foreground">
                    那么如何做好这道选择题呢？记住我们的口诀：
                  </p>
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/30 text-center">
                    <p className="text-xl font-bold text-foreground">
                      门当户对有钱赚，一选二切三推算
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    门当户对指的是你的核心能力和客户的核心需求匹配，你们能看对眼，有钱赚是指做这个客户能有可观的利润，让你的公司能够持续获利。
                  </p>
                  <p className="text-muted-foreground mb-2">具体的方法就是选、切和算：</p>
                  <ul className="space-y-2 ml-4 list-disc text-muted-foreground">
                    <li><strong>选</strong>：就是把有可能的客户全部选出来</li>
                    <li><strong>切</strong>：就是将客户群切分，明确不同潜在客户的特征</li>
                    <li><strong>算</strong>：把你潜在的客户按照门当户对有钱赚的逻辑，算算你和谁最匹配、最应该赚谁的钱</li>
                  </ul>
                </div>
              )}

              {/* 步骤5 */}
              {step.num === 5 && (
                <div className="mt-4 ml-11">
                  <p className="text-muted-foreground">
                    最后，为了帮助大家拿回去用，我给大家总结了一个小抄，大家只需要截个图，勾选适合自己的选项，就能得出不同平台、对你来说的重要性排序啦。
                  </p>
                </div>
              )}

              {/* 步骤6 */}
              {step.num === 6 && (
                <div className="mt-4 ml-11">
                  <p className="text-muted-foreground">
                    好，本节课，我们从四个维度，了解了不同平台的趋势和特点，还学会了从3个方面，去锁定我们的短视频主战场。
                  </p>
                </div>
              )}
            </div>
          ))}

          <p className="text-muted-foreground text-center mt-8">
            以上就是本节的全部内容，谢谢大家！
          </p>
        </section>
      </>
    ),
  },
  'staying-steady-amid-trends': {
    title: '在潮流中稳住脚跟',
    date: '2026-06-28',
    tags: ['内容设计', '方法论'],
    content: (
      <>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          不少课程产品经理，尤其是对财务结果负责的，从项目筛选开始直至产品上架之后，每天都会被几个问题笼罩：
        </p>
        <ul className="space-y-2 ml-6 list-disc text-muted-foreground mb-6">
          <li>经典就是经典，人人需要，可是......</li>
          <li>潮流千变万化，万一还没等我做完这就不火了咋办</li>
          <li>现在大家都关注这个，我还来得及吗</li>
          <li>这玩意儿太新了没资料参考啊</li>
        </ul>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          我们总觉得有个"大势所趋"，什么"历史的洪流滚滚向前"，总觉得历史有一个方向，有一个终点，历史上发生的事情总有其最终的意义，这个看上去很像经验论，但实际上是我们拿着结果去解释过程。经济发展并非线性连续和自然发生的，它没有"大势所趋"。
        </p>

        {/* 配图 */}
        <div className="mb-8 flex justify-center">
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
            alt="趋势与创新"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 创新五种范式 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">创新的五种范式</h2>
          <p className="text-muted-foreground mb-4">
            实际上真正能够带来经济发展的创新一共有五种范式：
          </p>
          <ul className="space-y-3 ml-6 list-disc text-muted-foreground">
            <li><strong className="text-foreground">新产品</strong> — 一种新产品，或一种已有产品的新品质</li>
            <li><strong className="text-foreground">新的生产方式或商业模式</strong></li>
            <li><strong className="text-foreground">新市场的开拓</strong> — 这里的新市场指的是尚未打入的市场，是否已经存在这个市场并不重要</li>
            <li><strong className="text-foreground">新的供应来源</strong> — 占领一种新的原材料/半成品或新的供应来源</li>
            <li><strong className="text-foreground">新的组织形式</strong> — 行业内一种新的组织形式，比如托拉斯</li>
          </ul>
          <p className="text-muted-foreground mt-4">
            那么就算我们知道这个创新确实会带来发展，我们也同时会觉得这内容难设计，这是个新的领域我怎么做内容规划？
          </p>
        </section>

        {/* 问题树 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">问题树：从客户出发的内容设计</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            这时候客户的<strong className="text-foreground">"问题树"</strong>就非常重要，它总是起始于客户的一个核心目标或者说待解决的问题，从而延伸出一堆因果关系导致的细分问题，我们就是要找到当前解答这些问题的最好资源。
          </p>
          <p className="text-muted-foreground leading-relaxed">
            不过很多时候太新的事物，亲历的人自己都没仔细想过事情的发展脉络，那我们又怎么知道要如何选取并且定制内容？
          </p>
        </section>

        {/* 配图 */}
        <div className="mb-8 flex justify-center">
          <Image 
            src="https://images.unsplash.com/photo-1507842219432-e47d545a9902?w=800&h=400&fit=crop"
            alt="知识体系"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* 学科体系 */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">学科体系兜底</h2>
          <p className="text-muted-foreground mb-4">学科会为我们兜底：</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              '战略管理', '领导力开发', '团队建设', '绩效管理', '变革管理', '组织文化塑造',
              '行业特定技术（如研发、生产）', '职能技能（财务、营销、人力资源、供应链）', '数字素养（数据分析、AI应用）',
              '职业心态', '情绪管理', '商务礼仪', '谈判技巧', '冲突解决', '高效沟通',
              '劳动法', '合规经营', 'EHS（环境、健康、安全）管理体系', '职业道德、企业社会责任'
            ].map((item, idx) => (
              <div key={idx} className="px-3 py-2 rounded bg-card/50 border border-border text-sm text-muted-foreground">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 爆品公式 */}
        <blockquote className="p-6 rounded-lg bg-primary/5 border-l-4 border-primary">
          <p className="font-bold text-foreground mb-2">爆品公式</p>
          <p className="text-muted-foreground mb-2">一个好的设计并不一定成就一个爆品</p>
          <p className="text-lg font-semibold text-foreground">
            爆品 = （热点挖掘 + 流量扶持 + 用户炫耀）×（制造峰值 + 克制设计 + 敏捷迭代）
          </p>
        </blockquote>
      </>
    ),
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
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* 返回按钮 */}
        <Link 
          href="/#blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-base font-medium">返回博客列表</span>
        </Link>

        {/* 文章头部 */}
        <div className="mb-8">
          {/* 标签 */}
          <div className="flex gap-2 mb-4">
            {article.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* 标题 */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          {/* 日期 */}
          <p className="text-sm text-muted-foreground">{article.date}</p>
        </div>

        {/* 文章内容 */}
        <article className="prose prose-lg prose-invert max-w-none">
          {article.content}
        </article>

        {/* 底部返回按钮 */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link 
            href="/#blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            返回博客列表
          </Link>
        </div>
      </div>
    </div>
  );
}