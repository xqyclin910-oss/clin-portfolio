'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  { id: 1, url: '/assets/testimonials/testimonial_1.png' },
  { id: 2, url: '/assets/testimonials/testimonial_2.png' },
  { id: 3, url: '/assets/testimonials/testimonial_3.png' },
  { id: 4, url: '/assets/testimonials/testimonial_4.png' },
  { id: 5, url: '/assets/testimonials/testimonial_5.png' },
  { id: 6, url: '/assets/testimonials/testimonial_6.png' },
  { id: 7, url: '/assets/testimonials/testimonial_7.png' },
  { id: 8, url: '/assets/testimonials/testimonial_8.png' },
  { id: 9, url: '/assets/testimonials/testimonial_9.png' },
  { id: 10, url: '/assets/testimonials/testimonial_10.png' },
  { id: 11, url: '/assets/testimonials/ai_fastcamp_testimonial3.png' },
  { id: 12, url: '/assets/testimonials/business_model_homework.png' },
  { id: 13, url: '/assets/testimonials/ai_fastcamp_testimonial1.png' },
  { id: 14, url: '/assets/testimonials/ai_fastcamp_testimonial2.png' },
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
                alt={`学员证言 ${item.id}`}
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
                alt="学员证言大图"
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