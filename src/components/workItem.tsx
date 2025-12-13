import { type JSX } from 'react'

interface WorkItemProps {
    title: string,
    link?: string,
    image?: string,
    description?: string
}

function WorkItem({ title, link, image, description }: WorkItemProps): JSX.Element {
  return (
    <button className="w-full bg-white border-4 rounded-2xl h-32 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-100 cursor-pointer">
      <h1 className="text-4xl text-black font-bold uppercase">{title}</h1>
    </button>
  );
}

export default WorkItem;
