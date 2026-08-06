'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

interface VideoItem {
  bvid: string;
  label: string;
  ratio: string;
}

const shortFormVideos: VideoItem[] = [
  { bvid: 'BV1s2Mh6DEmh', label: '全流程AI创作短片 Full AI Creation Short Film', ratio: '9/16' },
  { bvid: 'BV1oguJ66EnS', label: '品牌向信息流（含数字人）Brand Feed with Digital Human', ratio: '9/16' },
  { bvid: 'BV1oguJ6zE4v', label: '社会热点信息流 Social Trending Feed', ratio: '9/16' },
  { bvid: 'BV1fKuJ6GEkN', label: 'TED千万播放Rejection Guy个人故事', ratio: '9/16' },
  { bvid: 'BV17uuJ63EPZ', label: '氛围感剪辑 Atmospheric Edit', ratio: '9/16' },
  { bvid: 'BV1fKuJ6GEtp', label: '秋阳外网口播 Katrina', ratio: '9/16' },
  { bvid: 'BV1JKuJ6VEgW', label: '秋阳外网口播 QYoutlaw', ratio: '9/16' },
  { bvid: 'BV1ouuJ6gEi4', label: '话题对标自然流百万播放爆款', ratio: '9/16' },
  { bvid: 'BV1ZuuJ6gET3', label: '精准预测自然流百万播放爆款 | 单条涨粉2万', ratio: '9/16' },
  { bvid: 'BV1ouuJ6gEhk', label: '争议性话题起号爆款：职场逃离6个信号', ratio: '9/16' },
];

const longFormVideos: VideoItem[] = [
  { bvid: 'BV1EKuJ6VEmS', label: '独立站宣传 Independent Site Promo', ratio: '16/9' },
  { bvid: 'BV1oguJ6zEG1', label: 'Kyran IP理念片 Kyran IP Concept Film', ratio: '16/9' },
];

function VideoCard({ bvid, label, ratio, maxWidth }: VideoItem & { maxWidth: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleStop = () => setIsPlaying(false);

  return (
    <div
      className="video-card hover-lift group flex flex-col bg-[#0a1120] rounded-lg overflow-hidden border border-border/20"
      style={{ maxWidth, width: '100%' }}
    >
      <div className="relative w-full" style={{ aspectRatio: ratio, background: '#0a1929' }}>
        {isPlaying ? (
          <>
            <iframe
              src={`https://player.bilibili.com/player.html?bvid=${bvid}&high_quality=1&danmaku=0`}
              scrolling="no"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
            <button
              onClick={handleStop}
              className="absolute top-2 right-2 z-10 bg-black/70 text-white text-xs px-2 py-1 rounded hover:bg-black/90 transition-colors"
            >
              ✕ 关闭
            </button>
          </>
        ) : (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/play bg-gradient-to-b from-white/5 to-transparent hover:from-white/10 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover/play:bg-primary group-hover/play:scale-110 transition-all shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </div>
            <span className="text-[10px] text-white/40 mt-2 group-hover/play:text-white/60 transition-colors">
              点击播放
            </span>
          </button>
        )}
      </div>
      <div className="p-3 bg-[#0a1120] border-t border-border/10">
        <span className="text-xs text-white/90 font-medium line-clamp-2">{label}</span>
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
      <div className="max-w-[1400px] mx-auto px-4">
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
          <div className="flex flex-wrap gap-4 justify-center">
            {shortFormVideos.map((video) => (
              <VideoCard key={video.bvid} {...video} maxWidth="220px" />
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
          <div className="flex flex-wrap gap-4 justify-center">
            {longFormVideos.map((video) => (
              <VideoCard key={video.bvid} {...video} maxWidth="380px" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
