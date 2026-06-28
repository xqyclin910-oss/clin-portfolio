'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DocumentPreview } from './DocumentPreview';

// 4.1 课程产品矩阵（3张图并列展示）
const productMatrixItems = [
  {
    image: '/assets/products/image_1782538522652_0_zjey.png',
    title: '博商课程产品矩阵',
    description: '主导开发的10款企业家课程产品，覆盖创业增长、AI营销、直播电商、私域运营等方向',
  },
  {
    image: '/assets/products/liuliang_shicao_4980.jpg',
    title: '流量实操课程产品',
    description: '针对中小企业主的流量获取实操课程',
  },
  {
    image: '/assets/products/gujunhui_4980.jpg',
    title: '顾均辉课程产品',
    description: '与知名讲师合作的高端课程产品',
  },
];

// 4.2 代表作（2张图并列展示）
const featuredWorks = [
  {
    image: '/assets/products/ai_fastcamp_long.jpg',
    title: 'AI+短视频获客快训营',
    description: '面向年收入3000万以下企业主，14天学习链路，6个真实学员案例，逆转恐惧新媒体心理，让学员行为发生改变',
    isLongImage: true,
  },
  {
    image: '/assets/products/chuangye_growth_new_landing.png',
    title: '创业增长实战营·新版落地页',
    description: '新版课程落地页设计，优化转化路径',
    isLongImage: true,
  },
];

// 4.3 项目文档展示
interface DocItem {
  file: string;
  title: string;
  description?: string;
  type: 'image' | 'pdf' | 'docx' | 'xlsx';
}

const documents: DocItem[] = [
  {
    file: '/assets/products/study_guide_3.png',
    title: '商业模式落地特训营·学习手册',
    type: 'image',
  },
  {
    file: '/assets/products/image_1782538934772_0_uxgq.png',
    title: '短视频获客项目·全流程文档体系',
    description: '从立项→研发→录制→上架→售卖→交付的完整产品全链路',
    type: 'image',
  },
  {
    file: '/assets/products/16786f9d_p0p8.png',
    title: '博商线上特训营·课程录制',
    type: 'image',
  },
  {
    file: '/assets/products/9e79c822_b7z3.jpg',
    title: '博商出海主题·直播分享',
    type: 'image',
  },
  {
    file: '/assets/docs/商业模式知识图谱.pdf',
    title: '商业模式落地·知识图谱',
    type: 'pdf',
  },
  {
    file: '/assets/docs/UDS_上海易拉宝.pdf',
    title: '小鹏汽车UDS骁将计划·上海站',
    type: 'pdf',
  },
  {
    file: '/assets/docs/工作坊详情_奶糖派.docx',
    title: 'lululemon×奶糖派·品牌咨询工作坊',
    type: 'docx',
  },
  {
    file: '/assets/docs/小鹏x完美日记_rundown.xlsx',
    title: '小鹏汽车×完美日记·活动Rundown',
    type: 'xlsx',
  },
];

// 4.4 工作现场照片
interface PhotoItem {
  image: string;
  title: string;
  description: string;
}

const photos: PhotoItem[] = [
  {
    image: '/assets/photos/61228c71_crhx.jpeg',
    title: '2021 EIEC新零售巅峰对话',
    description: '主导的lululemon中国1号员工Flora对话星巴克总裁霍华德',
  },
  {
    image: '/assets/photos/594a0792_9k1r.jpeg',
    title: 'lululemon x 传音内部培训',
    description: '主导开发的企业培训项目，室内分享会',
  },
  {
    image: '/assets/photos/106fa26c_87xi.jpeg',
    title: 'TGO鲲鹏会·游学活动',
    description: '为头部企业开发的游学分享项目，讲师度阴山·王阳明知行合一碰撞科技高管',
  },
  {
    image: '/assets/photos/17b3d31b_vqc0.jpeg',
    title: '逸仙电商x小鹏实地学习活动分享环节',
    description: '课程交付中的实地学习活动分享环节',
  },
  {
    image: '/assets/photos/cc2682b9_qthb.jpeg',
    title: '企业家参访腾讯',
    description: '带队企业家学员参观腾讯总部',
  },
  {
    image: '/assets/photos/b7331cd2_2yzv.jpeg',
    title: '腾讯远航计划·主题演讲',
    description: '远航计划课程现场，讲师分享"个体化进程"',
  },
];

export function ProjectGallery() {
  return (
    <section className="px-6 py-8 md:py-10">
      <div className="max-w-5xl mx-auto">
        {/* 标题 */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2 text-foreground">项目作品</h2>
          <p className="text-base text-muted-foreground">精选课程产品与业务成果</p>
        </div>

        {/* 4.1 课程产品矩阵（3张并列展示） */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            课程产品矩阵
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productMatrixItems.map((item, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  {/* 长图纵向可滚动容器 */}
                  <div 
                    className="overflow-y-auto overflow-x-hidden relative"
                    style={{ maxHeight: '600px' }}
                  >
                    <div className="relative w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={800}
                        height={2000}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={false}
                      />
                    </div>
                  </div>
                  <div className="p-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 4.2 代表作（2张并列展示） */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            代表作展示
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredWorks.map((work, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  {/* 长图纵向可滚动容器 */}
                  <div 
                    className="overflow-y-auto overflow-x-hidden relative"
                    style={{ maxHeight: '600px' }}
                  >
                    <div className="relative w-full">
                      <Image
                        src={work.image}
                        alt={work.title}
                        width={800}
                        height={2000}
                        className="w-full h-auto object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 4.3 项目文档展示 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            项目文档展示
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {documents.map((doc, index) => (
              <DocumentPreview
                key={index}
                file={doc.file}
                title={doc.title}
                type={doc.type}
                trigger={
                  <Card className="bg-card border-border hover:border-primary transition-colors h-full">
                    <CardContent className="p-4">
                      {/* 文档缩略图 */}
                      <div className="aspect-[4/3] bg-secondary rounded flex items-center justify-center mb-3 overflow-hidden">
                        {doc.type === 'image' ? (
                          <div className="w-full h-full relative">
                            <Image
                              src={doc.file}
                              alt={doc.title}
                              fill
                              className="object-contain"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />
                          </div>
                        ) : (
                          <div className="text-muted-foreground text-sm flex flex-col items-center gap-2">
                            <span className="text-2xl">
                              {doc.type === 'pdf' ? '📄' : doc.type === 'docx' ? '📝' : '📊'}
                            </span>
                            <span>
                              {doc.type === 'pdf' ? 'PDF' : doc.type === 'docx' ? 'Word' : 'Excel'}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* 文档标题 */}
                      <h4 className="text-sm font-semibold text-foreground line-clamp-2">
                        {doc.title}
                      </h4>
                      
                      {/* 文档描述（如果有） */}
                      {doc.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {doc.description}
                        </p>
                      )}
                      
                      {/* 点击提示 */}
                      <div className="mt-2 text-xs text-primary">
                        点击查看详情
                      </div>
                    </CardContent>
                  </Card>
                }
              />
            ))}
          </div>
        </div>

        {/* 4.4 工作现场照片 */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded" />
            工作现场照片
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  {/* 照片容器 - object-contain 不裁剪 */}
                  <div className="aspect-[4/3] relative bg-secondary">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {photo.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}