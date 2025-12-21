import { type JSX } from 'react';
import WorkItem from './WorkItem.tsx';

interface WorkItemData {
  title: string;
  description?: string;
  link?: string;
  image?: string;
}

interface WorkProps {
    title: string,
    items?: WorkItemData[]
}

function Work({ title, items }: WorkProps): JSX.Element {
  return (
    <div className='w-full flex flex-col items-center gap-y-16 py-32 container bg-[#90EE90] px-12'>
      <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white md:max-w-2/3 p-4 md:p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-black font-bold font-title text-3xl md:text-6xl">{title}</h1>
        <p className="text-black font-bold font-title md:text-xl">A selection of real-world projects I've worked on, including websites and mobile applications, with a focus on frontend architecture, user experience, and styling.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items?.map((item, index) => (
          <WorkItem
            key={index}
            title={item.title}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;