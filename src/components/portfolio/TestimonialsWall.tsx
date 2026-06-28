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
    <section className="py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            学员的声音
          </h2>
          <p className="text-lg text-muted-foreground">
            来自课堂的真实反馈
          </p>
        </div>

        {/* 照片墙网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-200"
              onClick={() => openLightbox(item.url)}
            >
              <Image
                src={item.url}
                alt={`学员证言 ${item.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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