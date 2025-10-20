import { type JSX } from 'react'

interface HeroProps {
    title: string,
    subtitle?: string
}

function Hero({ title, subtitle }: HeroProps): JSX.Element {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-y-8">
      <h1 className="text-green font-bold font-title text-3xl md:text-8xl">{title}</h1>
      <h2 className="text-green font-bold font-title md:text-2xl text-center w-3/4">{subtitle}</h2>
    </div>
  );
}

export default Hero;
