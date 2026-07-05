'use client';

import { useRef, useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

const shortForm = [
  { src: '/videos/brand-feed-digital-human.mp4', label: 'Brand Feed + Digital Human' },
  { src: '/videos/social-trending-feed.mp4', label: 'Social Trending Feed' },
  { src: '/videos/katrina-xie-tiktok.mp4', label: 'Creator: Katrina Xie' },
  { src: '/videos/qyoutlaw-tiktok.mp4', label: 'Creator: QYoutlaw' },
  { src: '/videos/6-things-matt.mp4', label: 'Creator: Matt' },
  { src: '/videos/pitch-deck-steve-hoffman.mp4', label: 'Creator: Steve Hoffman' },
];

const longForm = [
  { src: '/videos/kyuan-brand-film.mp4', label: 'Kyuan Brand Film' },
  { src: '/videos/rejection-guy.mp4', label: 'The Rejection Guy' },
  { src: '/videos/independent-site-promo.mp4', label: 'DTC Store Promo' },
];

function VideoCard({ src, label, aspect }: { src: string; label: string; aspect: '16/9' | '4/3' }) {
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
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
        <span className="text-xs text-white/80">{label}</span>
      </div>
    </div>
  );
}

export function VideoPortfolio() {
  const { ref, isVisible } = useInView(0.1);

  return (
    <section className="relative py-16 md:py-20 px-4">
      <div
        ref={ref}
        className="max-w-6xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease',
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          <span className="text-foreground">Content </span>
          <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-center text-sm mb-10">
          Hover to preview — from brand campaigns to creator content
        </p>

        {/* Short-Form Content */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Short-Form Content
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shortForm.map((v) => (
              <VideoCard key={v.src} {...v} aspect="16/9" />
            ))}
          </div>
        </div>

        {/* Long-Form & Brand Films */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Long-Form & Brand Films
          </h3>
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
