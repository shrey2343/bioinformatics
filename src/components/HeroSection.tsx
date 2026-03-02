import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  badge?: {
    icon?: ReactNode;
    text: string;
  };
}

function HeroSection({ title, subtitle, children, badge }: HeroSectionProps) {
  return (
    <div className="relative bg-black text-white overflow-hidden pt-20">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="https://cdn.pixabay.com/video/2017/01/01/6973-197914400_large.mp4" type="video/mp4" />
      </video>
      
      {/* Subtle gradient overlay only at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 mb-6 shadow-2xl">
              {badge.icon}
              <span className="text-sm font-semibold text-white">{badge.text}</span>
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-white max-w-3xl mx-auto mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] [text-shadow:_1px_1px_4px_rgb(0_0_0_/_70%)] font-medium">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
