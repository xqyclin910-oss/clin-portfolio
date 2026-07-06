'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/useAnimations';

const photos = [
  { src: '/assets/photos/behind-scenes.png', label: '拍摄现场', labelEn: 'On Set' },
  { src: '/assets/photos/team-activity.png', label: '团队活动', labelEn: 'Team Activity' },
];

export function BehindScenes() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div
        ref={ref}
        className="max-w-4xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
          <span className="text-foreground">幕后</span>
          <span className="gradient-text">花絮</span>
        </h2>
        <p className="text-muted-foreground/60 italic text-center text-sm mb-1">
          Behind the Scenes
        </p>
        <p className="text-muted-foreground text-center text-sm mb-10">
          记录团队与创作背后的精彩瞬间
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className="hover-lift rounded-xl overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 100}ms`,
              }}
            >
              <div className="relative w-full" style={{ aspectRatio: '16/9', background: '#0a1929' }}>
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-xs text-foreground font-medium">{photo.label}</span>
                <span className="text-[10px] text-muted-foreground/60 italic ml-1">{photo.labelEn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
