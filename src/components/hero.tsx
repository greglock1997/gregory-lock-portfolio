import { type JSX } from 'react';

interface HeroProps {
    title: string,
    subtitle?: string
}

function Hero({ title, subtitle }: HeroProps): JSX.Element {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-y-8 bg-[#87CEEB] p-8">
      <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white p-4 md:p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-black font-bold font-title text-3xl md:text-8xl">{title}</h1>
        <h2 className="text-black font-bold font-title md:text-2xl">{subtitle}</h2>
      </div>
    </div>
  );
}

export default Hero;
