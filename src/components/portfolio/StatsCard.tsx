'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// 海外社媒核心数据
const stats = [
  { value: '2.85M', numericValue: 2.85, suffix: 'M', label: '矩阵总粉丝' },
  { value: '33', numericValue: 33, suffix: '', label: '跨平台账号' },
  { value: '150-200', numericValue: 175, suffix: '', label: '月均视频产出', isRange: true, rangeFrom: 150, rangeTo: 200 },
  { value: '75+', numericValue: 75, suffix: '+', label: '自然流爆款' },
  { value: '8万+', numericValue: 8, suffix: '万+', label: '独立站点击' },
  { value: '>3', numericValue: 3, suffix: '', label: 'LTV/CAC', isGreaterThan: true },
];

function useCountUp(target: number, duration: number = 1500, start: boolean = false): number {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!start) return;
    
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(eased * target);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [target, duration, start]);

  return count;
}

function AnimatedStat({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const count = useCountUp(stat.numericValue, 1500 + index * 200, isVisible);
  
  const formatValue = useCallback(() => {
    if (stat.isRange) {
      return `${stat.rangeFrom}-${stat.rangeTo}`;
    }
    if (stat.isGreaterThan) {
      return `>${Math.round(count)}`;
    }
    if (stat.suffix === 'M') {
      return count.toFixed(2) + 'M';
    }
    if (stat.suffix === '万+') {
      return Math.round(count) + '万+';
    }
    if (stat.suffix === '+') {
      return Math.round(count) + '+';
    }
    return Math.round(count).toString();
  }, [count, stat]);

  return (
    <span
      className="inline-flex items-center gap-1"
      style={{
        animationDelay: `${index * 100}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 0.4s ease ${index * 100}ms, transform 0.4s ease ${index * 100}ms`,
      }}
    >
      <span className="font-bold text-primary tabular-nums">{formatValue()}</span>
      <span className="text-muted-foreground">{stat.label}</span>
    </span>
  );
}

export function StatsCard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-4 py-4">
      {/* 蓝绿拼色渐变条 - 顶部装饰 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 gradient-bar rounded-full" aria-hidden="true" />
      
      <div className="max-w-5xl mx-auto">
        {/* 一行紧凑展示 */}
        <div className="flex items-center justify-center gap-2 md:gap-4 text-xs md:text-sm flex-wrap">
          {stats.map((stat, index) => (
            <span key={index} className="inline-flex items-center">
              <AnimatedStat stat={stat} index={index} isVisible={isVisible} />
              {index < stats.length - 1 && (
                <span className="text-muted-foreground/30 ml-1 md:ml-2">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
