'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

const shortForm = [
  { src: '/videos/brand-feed-digital-human.mp4', label: '品牌信息流+数字人', labelEn: 'Brand Feed + Digital Human' },
  { src: '/videos/social-trending-feed.mp4', label: '社会热点信息流', labelEn: 'Social Trending Feed' },
  { src: '/videos/katrina-xie-tiktok.mp4', label: '达人：Katrina Xie', labelEn: 'Creator: Katrina Xie' },
  { src: '/videos/qyoutlaw-tiktok.mp4', label: '达人：QYoutlaw', labelEn: 'Creator: QYoutlaw' },
  { src: '/videos/2-books-steve-hoffman.mp4', label: '达人：Steve Hoffman (2 Books)', labelEn: 'Creator: Steve Hoffman (2 Books)' },
  { src: '/videos/3-boring-jobs-steve-hoffman.mp4', label: '达人：Steve Hoffman (3 Jobs)', labelEn: 'Creator: Steve Hoffman (3 Jobs)' },
  { src: '/videos/6-things-matt.mp4', label: '达人：Matt', labelEn: 'Creator: Matt' },
  { src: '/videos/pitch-deck-steve-hoffman.mp4', label: '达人：Steve Hoffman (Pitch)', labelEn: 'Creator: Steve Hoffman (Pitch)' },
  { src: '/videos/showreel-compressed.mp4', label: '作品集混剪', labelEn: 'Showreel' },
];

const longForm = [
  { src: '/videos/kyuan-brand-film.mp4', label: '凯源品牌片', labelEn: 'Kyuan Brand Film' },
  { src: '/videos/rejection-guy.mp4', label: '拒绝哥', labelEn: 'The Rejection Guy' },
  { src: '/videos/independent-site-promo.mp4', label: '独立站宣传', labelEn: 'DTC Store Promo' },
];

function VideoCard({ src, label, labelEn, aspect }: { src: string; label: string; labelEn: string; aspect: '16/9' | '4/3' }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <div
      className="video-container hover-lift group"
      style={{ aspectRatio: aspect }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        controls
        className="w-full h-full object-contain"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-xs text-white/90 font-medium">{label}</span>
        <span className="text-[10px] text-white/50 italic ml-1">{labelEn}</span>
      </div>
    </div>
  );
}

export function VideoPortfolio() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 gradient-bar rounded-full" aria-hidden="true" />

      <div
        ref={ref}
        className="max-w-6xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">
          <span className="text-foreground">内容</span>
          <span className="gradient-text">作品集</span>
        </h2>
        <p className="text-muted-foreground/60 italic text-center text-sm mb-1">
          Content Portfolio
        </p>
        <p className="text-muted-foreground text-center text-sm mb-10">
          悬停预览 — 从品牌营销到达人内容
        </p>

        {/* 短视频 - 9个，16:9容器 */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            短视频内容
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Short-Form Content (9 videos)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shortForm.map((v) => (
              <VideoCard key={v.src} {...v} aspect="16/9" />
            ))}
          </div>
        </div>

        {/* 长视频与品牌片 - 3个，4:3容器 */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            长视频与品牌片
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Long-Form & Brand Films (3 videos)</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {longForm.map((v) => (
              <VideoCard key={v.src} {...v} aspect="4/3" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
