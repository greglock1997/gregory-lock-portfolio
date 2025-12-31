import { type JSX } from 'react';
import SectionHeader from './SectionHeader';

function Contact(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center gap-y-16 py-32 container bg-[#A388EE] px-12" id='contact'>
      <SectionHeader
        title="Contact"
      />
      <div className="flex flex-col md:flex-row gap-8">
          <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gregory-lock/' className="flex justify-center gap-4 bg-white border-4 p-4 rounded-full overflow-hidden hover:-translate-2 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
              <h1 className="text-3xl text-black font-bold uppercase text-start">LinkedIn</h1>
              <i className="fa-brands fa-linkedin fa-2x"/>
          </a>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/greglock1997' className="flex justify-center gap-4 bg-white border-4 p-4 rounded-full overflow-hidden hover:-translate-2 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
              <h1 className="text-3xl text-black font-bold uppercase text-start">Github</h1>
              <i className="fa-brands fa-github fa-2x"/>
          </a>
          <a href='mailto:greglock1997@outlook.com' className="flex justify-center gap-4 bg-white border-4 p-4 rounded-full overflow-hidden hover:-translate-2 hover:shadow-[8px_8px_0_0_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group">
              <h1 className="text-3xl text-black font-bold uppercase text-start">Email</h1>
              <i className="fa-solid fa-envelope fa-2x"/>
          </a>
      </div>
    </div>
  );
}

export default Contact;