'use client';

export function FunSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-6">
          如果你想认识做海外内容增长的我，点这里
        </p>
        <a
          href="https://yr79864vmn.coze.site/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-foreground font-medium hover:bg-primary/90 transition-colors group"
        >
          <span className="text-lg">看看另一个我</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </section>
  );
}