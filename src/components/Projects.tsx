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

function Projects({ title, items }: WorkProps): JSX.Element {
  return (
    <div className='w-full flex flex-col items-center gap-y-16 py-32 bg-[#FF7A5C] px-12' id='projects'>
      <SectionHeader
        title={title}
        description="A selection of personal projects built to explore and apply ideas learned through independent study."
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

export default Projects;