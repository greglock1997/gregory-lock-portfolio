import { type JSX } from 'react';
import WorkItem from './WorkItem.tsx';
import SectionHeader from './SectionHeader.tsx';

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
    <div className='w-full flex flex-col items-center gap-y-16 py-32 bg-[#F4D738] px-12' id='work'>
      <SectionHeader
        title={title}
        description="A selection of real-world projects I've worked on, including websites and mobile applications, with a focus on frontend architecture, user experience, and styling."
      />
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