import { type JSX } from 'react';

function Contact(): JSX.Element {
  return (
    <div className="w-full flex flex-col items-center gap-y-16 py-32 container bg-[#A388EE] px-12">
    <div className="flex flex-col gap-y-2 md:gap-y-4 bg-white p-4 md:p-8 border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-black font-bold font-title text-3xl md:text-6xl">Contact</h1>
        {/* <h2 className="text-black font-bold font-title md:text-2xl"></h2> */}
      </div>
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