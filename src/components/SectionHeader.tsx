import { type JSX } from 'react';

interface SectionHeaderProps {
    title: string,
    description?: string
}

function SectionHeader({title, description}: SectionHeaderProps): JSX.Element {
  return (
    <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white md:max-w-2/3 p-4 md:p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-black font-bold font-title text-3xl md:text-6xl">{title}</h1>
        {description && (<p className="text-black font-bold font-title md:text-xl">{description}</p>)}
    </div>
  );
}

export default SectionHeader;