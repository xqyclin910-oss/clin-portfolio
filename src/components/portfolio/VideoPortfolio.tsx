'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

// 秋阳外网口播 (2个)
const qiuyangOral = [
  { src: '/videos/katrina-xie-tiktok.mp4', label: '秋阳外网口播 | Katrina Xie', labelEn: 'Qiuyang Oral | Katrina Xie' },
  { src: '/videos/qyoutlaw-tiktok.mp4', label: '秋阳外网口播 | QYoutlaw', labelEn: 'Qiuyang Oral | QYoutlaw' },
];

// 达人孵化内容 (5个)
const creatorContent = [
  { src: '/videos/2-books-steve-hoffman.mp4', label: '达人内容 | Steve Hoffman', labelEn: 'Creator Content | Steve Hoffman' },
  { src: '/videos/3-boring-jobs-steve-hoffman.mp4', label: '达人内容 | Steve Hoffman', labelEn: 'Creator Content | Steve Hoffman' },
  { src: '/videos/6-things-matt.mp4', label: '达人内容 | Matt', labelEn: 'Creator Content | Matt' },
  { src: '/videos/pitch-deck-steve-hoffman.mp4', label: '达人内容 | Steve Hoffman', labelEn: 'Creator Content | Steve Hoffman' },
  { src: '/videos/rejection-guy.mp4', label: '达人内容 | The Rejection Guy', labelEn: 'Creator Content | The Rejection Guy' },
];

// 品牌与独立站 (3个)
const brandContent = [
  { src: '/videos/brand-feed-digital-human.mp4', label: '品牌信息流 | Digital Human', labelEn: 'Brand Feed | Digital Human' },
  { src: '/videos/social-trending-feed.mp4', label: '社会热点信息流', labelEn: 'Social Trending Feed' },
  { src: '/videos/independent-site-promo.mp4', label: '独立站宣传 | TAICHI YOUNG', labelEn: 'DTC Store Promo | TAICHI YOUNG' },
];

// 作品集混剪 (1个)
const showreel = [
  { src: '/videos/showreel-compressed.mp4', label: '作品集混剪 | Showreel', labelEn: 'Portfolio Showreel' },
];

// 长视频 - 品牌片 (1个)
const longForm = [
  { src: '/videos/kyuan-brand-film.mp4', label: '凯源品牌片 | Kyuan Brand Film', labelEn: 'Kyuan Brand Film' },
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

function VideoSection({ title, titleEn, videos, aspect, color }: { 
  title: string; 
  titleEn: string; 
  videos: typeof qiuyangOral; 
  aspect: '16/9' | '4/3';
  color: string;
}) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${color}`} />
        {title}
      </h3>
      <p className="text-xs text-muted-foreground/60 italic mb-4 ml-4">{titleEn}</p>
      <div className={`grid grid-cols-1 ${aspect === '16/9' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-1'} gap-4`}>
        {videos.map((v) => (
          <VideoCard key={v.src} {...v} aspect={aspect} />
        ))}
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

        {/* 短视频内容 - 16:9容器 */}
        <VideoSection 
          title="秋阳外网口播" 
          titleEn="Qiuyang Oral Content (2 videos)" 
          videos={qiuyangOral} 
          aspect="16/9"
          color="bg-primary"
        />
        
        <VideoSection 
          title="达人孵化内容" 
          titleEn="Creator Incubation Content (5 videos)" 
          videos={creatorContent} 
          aspect="16/9"
          color="bg-primary"
        />
        
        <VideoSection 
          title="品牌与独立站" 
          titleEn="Brand & DTC Store (3 videos)" 
          videos={brandContent} 
          aspect="16/9"
          color="bg-primary"
        />
        
        <VideoSection 
          title="作品集混剪" 
          titleEn="Portfolio Showreel (1 video)" 
          videos={showreel} 
          aspect="16/9"
          color="bg-primary"
        />

        {/* 长视频 - 4:3容器 */}
        <VideoSection 
          title="长视频与品牌片" 
          titleEn="Long-Form & Brand Films (1 video)" 
          videos={longForm} 
          aspect="4/3"
          color="bg-accent"
        />
      </div>
    </section>
  );
}
