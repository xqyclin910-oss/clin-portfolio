'use client';

import { useState, useRef, useEffect } from 'react';

export function FunSection() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderWidth = 100; // 滑块宽度

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsUnlocking(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsUnlocking(true);
  };

  useEffect(() => {
    if (!isUnlocking) return;

    const handleMove = (clientX: number) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const maxX = rect.width - sliderWidth - 8; // 减去padding
      const x = clientX - rect.left - sliderWidth / 2 - 4;
      const newPosition = Math.max(0, Math.min(x, maxX));
      setSliderPosition(newPosition);

      // 检查是否滑动到位
      if (newPosition >= maxX - 5) {
        setIsUnlocked(true);
        setIsUnlocking(false);
        // 震动反馈
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        // 跳转
        setTimeout(() => {
          window.open('https://yr79864vmn.coze.site/', '_blank');
        }, 300);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      if (!isUnlocked) {
        // 如果没到位，滑块回弹
        setSliderPosition(0);
      }
      setIsUnlocking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isUnlocking, isUnlocked]);

  // 重置状态
  useEffect(() => {
    if (isUnlocked) {
      setTimeout(() => {
        setIsUnlocked(false);
        setSliderPosition(0);
      }, 1000);
    }
  }, [isUnlocked]);

  // 点击按钮跳转（移动端备用）
  const handleClick = () => {
    window.open('https://yr79864vmn.coze.site/', '_blank');
  };

  return (
    <section className="py-6 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-lg mx-auto text-center">
        {/* 主标题 */}
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          想知道我怎么做海外社媒？
        </h2>
        
        {/* 副标题说明 */}
        <p className="text-sm text-muted-foreground mb-4">
          从零搭建33个账号、285万粉丝海外社媒矩阵的全过程
        </p>

        {/* 滑动解锁容器 - PC端 */}
        <div 
          className="hidden md:block"
          ref={containerRef}
          onTouchStart={(e) => e.preventDefault()}
          style={{ touchAction: 'none', overscrollBehavior: 'contain' }}
        >
          <div
            className={`relative h-11 rounded-lg bg-neutral-800/80 overflow-hidden select-none mx-auto max-w-xs ${
              isUnlocked ? 'bg-neutral-700' : ''
            }`}
            style={{ cursor: isUnlocking ? 'grabbing' : 'grab' }}
          >
            {/* 左侧文字 */}
            <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-neutral-400 text-sm font-medium">
              <span>解锁另一面</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* 滑轨高亮 */}
            <div
              className="absolute left-2 top-2 bottom-2 bg-neutral-600/50 rounded-md transition-all"
              style={{ width: `${sliderPosition + sliderWidth / 2}px` }}
            />

            {/* 滑块 */}
            <div
              className={`absolute top-1.5 bottom-1.5 w-[92px] rounded-md bg-white flex items-center justify-center transition-all ${
                isUnlocked ? 'scale-105 shadow-lg shadow-white/20' : ''
              } ${isUnlocking ? '' : 'transition-transform duration-300'}`}
              style={{ left: `${sliderPosition + 4}px` }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* 滑块图标 */}
              <svg 
                className={`w-5 h-5 text-neutral-800 ${isUnlocked ? 'animate-spin' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isUnlocked ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                )}
              </svg>
            </div>

            {/* 解锁成功的闪光效果 */}
            {isUnlocked && (
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-lg" />
            )}
          </div>
        </div>

        {/* 点击按钮 - 移动端 */}
        <button
          onClick={handleClick}
          className="md:hidden inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-800 text-white text-sm font-medium hover:bg-neutral-700 transition-colors"
        >
          <span>解锁另一面</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </section>
  );
}