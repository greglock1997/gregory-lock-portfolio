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
    <div className="w-full flex flex-col gap-y-8 py-32 container bg-[#90EE90] px-12">
      <h1 className="text-black font-bold font-title text-3xl md:text-6xl">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items?.map((item, index) => (
          <WorkItem
            key={index}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;