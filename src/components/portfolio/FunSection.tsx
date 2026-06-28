'use client';

import { useState, useRef, useEffect } from 'react';

export function FunSection() {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderWidth = 120; // 滑块宽度

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsUnlocking(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsUnlocking(true);
  };

  useEffect(() => {
    if (!isUnlocking) return;

    const handleMove = (clientX: number) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const maxX = rect.width - sliderWidth - 16; // 减去padding
      const x = clientX - rect.left - sliderWidth / 2 - 8;
      const newPosition = Math.max(0, Math.min(x, maxX));
      setSliderPosition(newPosition);

      // 检查是否滑动到位
      if (newPosition >= maxX - 10) {
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
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
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
    window.addEventListener('touchmove', handleTouchMove);
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

  return (
    <section className="py-4 px-4">
      <div className="max-w-md mx-auto">
        {/* 滑动解锁容器 */}
        <div
          ref={containerRef}
          className={`relative h-12 rounded-full border-2 border-border bg-secondary/30 overflow-hidden select-none ${
            isUnlocked ? 'border-primary bg-primary/20' : ''
          }`}
          style={{ cursor: isUnlocking ? 'grabbing' : 'grab' }}
        >
          {/* 左侧文字 */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground text-sm">
            <span>解锁另一面</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* 滑轨高亮 */}
          <div
            className="absolute left-2 top-2 bottom-2 bg-primary/10 rounded-full transition-all"
            style={{ width: `${sliderPosition + sliderWidth / 2}px` }}
          />

          {/* 滑块 */}
          <div
            className={`absolute top-2 bottom-2 w-[104px] rounded-full bg-gradient-to-r from-primary/80 to-primary flex items-center justify-center transition-all ${
              isUnlocked ? 'scale-110 shadow-lg shadow-primary/50 animate-pulse' : ''
            } ${isUnlocking ? '' : 'transition-transform duration-300'}`}
            style={{ left: `${sliderPosition + 8}px` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            {/* 滑块图标 */}
            <svg 
              className={`w-6 h-6 text-foreground ${isUnlocked ? 'animate-spin' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isUnlocked ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              )}
            </svg>
          </div>

          {/* 解锁成功的闪光效果 */}
          {isUnlocked && (
            <div className="absolute inset-0 bg-primary/30 animate-pulse" />
          )}
        </div>
      </div>
    </section>
  );
}