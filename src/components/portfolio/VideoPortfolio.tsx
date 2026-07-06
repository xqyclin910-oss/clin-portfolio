'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

// 短视频 Short-Form - 9个
const shortFormVideos = [
  { src: '/videos/brand-feed-digital-human.mp4', label: '品牌向信息流（含数字人）Brand Feed with Digital Human' },
  { src: '/videos/social-trending-feed.mp4', label: '社会热点信息流 Social Trending Feed' },
  { src: '/videos/katrina-xie-tiktok.mp4', label: '秋阳外网口播' },
  { src: '/videos/qyoutlaw-tiktok.mp4', label: '秋阳外网口播' },
  { src: '/videos/2-books-steve-hoffman.mp4', label: '话题对标自然流百万播放爆款' },
  { src: '/videos/3-boring-jobs-steve-hoffman.mp4', label: '精准预测自然流百万播放爆款 | 单条涨粉2万' },
  { src: '/videos/6-things-matt.mp4', label: '争议性话题起号爆款：职场逃离6个信号' },
  { src: '/videos/pitch-deck-steve-hoffman.mp4', label: '氛围感剪辑 Atmospheric Edit' },
  { src: '/videos/rejection-guy.mp4', label: 'TED千万播放Rejection Guy个人故事' },
];

// 长视频 Long-Form - 3个
const longFormVideos = [
  { src: '/videos/showreel-compressed.mp4', label: 'QingYun IP广告片 QingYun IP Ad Film' },
  { src: '/videos/kyuan-brand-film.mp4', label: 'Kyran IP理念片 Kyran IP Concept Film' },
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
      className="video-card hover-lift group flex flex-col bg-[#0a1120] rounded-lg overflow-hidden border border-border/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center" style={{ minHeight: '200px', maxHeight: '280px', background: '#050a14' }}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          controls
          className="max-h-[280px] w-auto max-w-full object-contain"
        />
      </div>
      <div className="p-3 bg-[#0a1120] border-t border-border/10">
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
      className="video-card hover-lift group flex flex-col bg-[#0a1120] rounded-lg overflow-hidden border border-border/20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative flex items-center justify-center" style={{ minHeight: '240px', maxHeight: '360px', background: '#050a14' }}>
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          controls
          className="max-h-[360px] w-auto max-w-full object-contain"
        />
      </div>
      <div className="p-3 bg-[#0a1120] border-t border-border/10">
        <span className="text-sm text-white/90 font-medium">{label}</span>
      </div>
    </div>
  );
}

export function VideoPortfolio() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="portfolio"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
            <span className="w-3 h-3 rounded-full bg-primary" />
            视频作品集
          </h2>
          <p className="text-muted-foreground/60 italic text-sm">Content Portfolio</p>
        </div>

        {/* 短视频 */}
        <div
          className="mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            短视频
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Short-Form Content</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shortFormVideos.map((video, index) => (
              <ShortVideoCard key={video.src} {...video} />
            ))}
          </div>
        </div>

        {/* 长视频 */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            长视频
          </h3>
          <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">Long-Form Content</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {longFormVideos.map((video, index) => (
              <LongVideoCard key={video.src} {...video} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
