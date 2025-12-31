import { type JSX } from 'react'

interface WorkItemProps {
    title: string,
    link?: string,
    image?: string,
    description?: string
}

function WorkItem({ title, link, image, description }: WorkItemProps): JSX.Element {
  return (
    <a target="_blank" rel="noopener noreferrer" href={link} className="flex flex-col justify-start gap-y-4 md:w-full bg-white border-4 p-4 rounded-2xl overflow-hidden hover:-translate-2 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
      <div className="flex justify-between items-start gap-4">
        <h1 className="text-lg md:text-3xl text-black font-bold uppercase text-start">{title}</h1>
        <i className="fa-solid fa-arrow-down fa-2x mr-2 -rotate-90 group-hover:translate-x-2 transition-all duration-300"/>
      </div>
      {image && <img className="w-full aspect-video border-4 rounded-lg" src={image}/>}
    </a>
  );
}

export default WorkItem;
