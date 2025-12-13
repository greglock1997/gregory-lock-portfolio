import { type JSX } from 'react';

interface HeroProps {
    title: string,
    subtitle?: string
}

function Hero({ title, subtitle }: HeroProps): JSX.Element {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-y-8 bg-[#FF7A5C]">
      <div className="bg-white p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
      <h1 className="text-black font-bold font-title text-3xl md:text-8xl">{title}</h1>
      <h2 className="text-black font-bold font-title md:text-2xl text-center w-3/4">{subtitle}</h2>
      </div>
    </div>
  );
}

export default Hero;
