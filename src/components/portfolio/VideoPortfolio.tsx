'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/useAnimations';

interface VideoItem {
  bvid: string;
  label: string;
  ratio: string;
  gradient: string;
}

const shortFormVideos: VideoItem[] = [
  { bvid: 'BV1s2Mh6DEmh', label: '全流程AI创作短片 Full AI Creation Short Film', ratio: '9/16', gradient: 'from-violet-600/20 to-indigo-900/40' },
  { bvid: 'BV1oguJ66EnS', label: '品牌向信息流（含数字人）Brand Feed with Digital Human', ratio: '9/16', gradient: 'from-blue-600/20 to-cyan-900/40' },
  { bvid: 'BV1oguJ6zE4v', label: '社会热点信息流 Social Trending Feed', ratio: '9/16', gradient: 'from-red-600/20 to-orange-900/40' },
  { bvid: 'BV1fKuJ6GEkN', label: 'TED千万播放Rejection Guy个人故事', ratio: '9/16', gradient: 'from-pink-600/20 to-rose-900/40' },
  { bvid: 'BV17uuJ63EPZ', label: '氛围感剪辑 Atmospheric Edit', ratio: '9/16', gradient: 'from-amber-600/20 to-yellow-900/40' },
  { bvid: 'BV1fKuJ6GEtp', label: '秋阳外网口播 Katrina', ratio: '9/16', gradient: 'from-emerald-600/20 to-teal-900/40' },
  { bvid: 'BV1JKuJ6VEgW', label: '秋阳外网口播 QYoutlaw', ratio: '9/16', gradient: 'from-sky-600/20 to-blue-900/40' },
  { bvid: 'BV1ouuJ6gEi4', label: '话题对标自然流百万播放爆款', ratio: '9/16', gradient: 'from-fuchsia-600/20 to-purple-900/40' },
  { bvid: 'BV1ZuuJ6gET3', label: '精准预测自然流百万播放爆款 | 单条涨粉2万', ratio: '9/16', gradient: 'from-orange-600/20 to-red-900/40' },
  { bvid: 'BV1ouuJ6gEhk', label: '争议性话题起号爆款：职场逃离6个信号', ratio: '9/16', gradient: 'from-cyan-600/20 to-sky-900/40' },
];

const longFormVideos: VideoItem[] = [
  { bvid: 'BV1EKuJ6VEmS', label: '独立站宣传 Independent Site Promo', ratio: '16/9', gradient: 'from-indigo-600/20 to-violet-900/40' },
  { bvid: 'BV1oguJ6zEG1', label: 'Kyran IP理念片 Kyran IP Concept Film', ratio: '16/9', gradient: 'from-teal-600/20 to-emerald-900/40' },
];

function VideoCard({ bvid, label, ratio, gradient, maxWidth }: VideoItem & { maxWidth: string }) {
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
            className={`absolute inset-0 flex flex-col items-center justify-center cursor-pointer group/play bg-gradient-to-br ${gradient} hover:brightness-125 transition-all`}
          >
            {/* 装饰线条 */}
            <div className="absolute inset-4 border border-white/5 rounded" />
            
            {/* 播放按钮 */}
            <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover/play:bg-white/20 group-hover/play:scale-110 transition-all shadow-lg border border-white/20">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <polygon points="7,4 21,12 7,20" />
              </svg>
            </div>
            
            {/* 标题 */}
            <span className="text-[10px] text-white/60 mt-3 px-3 text-center line-clamp-2 max-w-[90%] group-hover/play:text-white/80 transition-colors">
              {label}
            </span>
            
            {/* 底部标识 */}
            <span className="absolute bottom-2 right-2 text-[9px] text-white/30">
              Bilibili
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
