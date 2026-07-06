'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

// 短视频 Short-Form - 9个
const shortFormVideos = [
  { src: '/videos/brand-feed-digital-human.mp4', label: '氛围感剪辑' },
  { src: '/videos/social-trending-feed.mp4', label: '社会热点信息流' },
  { src: '/videos/katrina-xie-tiktok.mp4', label: '秋阳外网口播' },
  { src: '/videos/qyoutlaw-tiktok.mp4', label: '秋阳外网口播' },
  { src: '/videos/2-books-steve-hoffman.mp4', label: '话题对标自然流百万播放爆款' },
  { src: '/videos/3-boring-jobs-steve-hoffman.mp4', label: '精准预测自然流百万播放爆款 | 单条涨粉2万' },
  { src: '/videos/6-things-matt.mp4', label: '争议性话题起号爆款：职场逃离6个信号' },
  { src: '/videos/pitch-deck-steve-hoffman.mp4', label: '达人孵化内容' },
  { src: '/videos/rejection-guy.mp4', label: 'TED千万播放Rejection Guy个人故事' },
];

// 长视频 Long-Form - 3个
const longFormVideos = [
  { src: '/videos/showreel-compressed.mp4', label: '作品集混剪 Showreel' },
  { src: '/videos/kyuan-brand-film.mp4', label: 'IP广告片' },
  { src: '/videos/independent-site-promo.mp4', label: '独立站宣传 Independent Site Promo' },
];

function ShortVideoCard({ src, label }: { src: string; label: string }) {
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
      className="video-container hover-lift group flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-1 flex items-center justify-center p-2">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          controls
          className="max-h-[240px] w-auto max-w-full object-contain rounded"
        />
      </div>
      <div className="p-2 bg-card/40 border-t border-white/5">
        <span className="text-xs text-white/90 font-medium line-clamp-2">{label}</span>
      </div>
    </div>
  );
}

function LongVideoCard({ src, label }: { src: string; label: string }) {
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
      className="video-container hover-lift group flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex-1 flex items-center justify-center p-3">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          controls
          className="max-h-[320px] w-auto max-w-full object-contain rounded"
        />
      </div>
      <div className="p-3 bg-card/40 border-t border-white/5">
        <span className="text-sm text-white/90 font-medium">{label}</span>
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
          悬停预览 · Hover to preview
        </p>

        {/* 短视频 Short-Form */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            短视频
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Short-Form Content</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {shortFormVideos.map((v) => (
              <ShortVideoCard key={v.src} {...v} />
            ))}
          </div>
        </div>

        {/* 长视频 Long-Form */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            长视频
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Long-Form Content</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {longFormVideos.map((v) => (
              <LongVideoCard key={v.src} {...v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
