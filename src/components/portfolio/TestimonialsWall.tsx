'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  { id: 1, url: '/assets/testimonials/testimonial_1.png', alt: 'TikTok 120万+粉丝数据截图' },
  { id: 2, url: '/assets/testimonials/testimonial_2.png', alt: 'Instagram 85万+粉丝数据截图' },
  { id: 3, url: '/assets/testimonials/testimonial_3.png', alt: 'YouTube 55万+粉丝数据截图' },
  { id: 4, url: '/assets/testimonials/testimonial_4.png', alt: 'Facebook 25万+粉丝数据截图' },
  { id: 5, url: '/assets/testimonials/testimonial_5.png', alt: '独立站8万+点击数据截图' },
  { id: 6, url: '/assets/testimonials/testimonial_6.png', alt: 'LTV/CAC>3业务数据截图' },
  { id: 7, url: '/assets/testimonials/testimonial_7.png', alt: '月均1600+条发布量数据截图' },
  { id: 8, url: '/assets/testimonials/testimonial_8.png', alt: '单月15万自然涨粉数据截图' },
  { id: 9, url: '/assets/testimonials/testimonial_9.png', alt: '75条10万+爆款数据截图' },
  { id: 10, url: '/assets/testimonials/testimonial_10.png', alt: '33账号矩阵总览截图' },
  { id: 11, url: '/assets/testimonials/ai_fastcamp_testimonial3.png', alt: '内容分层策略执行数据' },
  { id: 12, url: '/assets/testimonials/business_model_homework.png', alt: '转化漏斗优化数据' },
  { id: 13, url: '/assets/testimonials/ai_fastcamp_testimonial1.png', alt: '自然流起号效果数据' },
  { id: 14, url: '/assets/testimonials/ai_fastcamp_testimonial2.png', alt: '社媒矩阵增长曲线' },
];

export function TestimonialsWall() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (url: string) => {
    setSelectedImage(url);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-8 md:py-10 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            增长数据验证
          </h2>
          <p className="text-lg text-muted-foreground">
            用数据说话
          </p>
        </div>

        {/* 照片墙 - 瀑布流布局 */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-card mb-4"
              onClick={() => openLightbox(item.url)}
            >
              <Image
                src={item.url}
                alt={item.alt}
                width={400}
                height={0}
                className="w-full h-auto object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                style={{ height: 'auto' }}
              />
            </div>
          ))}
        </div>

        {/* Lightbox 弹窗 */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                className="absolute -top-8 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
                onClick={closeLightbox}
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="增长数据大图"
                width={800}
                height={1000}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}