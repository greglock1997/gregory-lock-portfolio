import { type JSX, useState } from 'react';

interface NavbarItem {
  name: string;
  id: string;
  link: string;
}

const navbarData: NavbarItem[] = [
    {
        name: 'Home',
        id: 'home',
        link: '/'
    },
    {
        name: 'Experience',
        id: 'experience',
        link: '/'
    },
    {
        name: 'Work',
        id: 'work',
        link: '/'
    },
    {
        name: 'Projects',
        id: 'projects',
        link: '/'
    },
    {
        name: 'Skills',
        id: 'skills',
        link: '/'
    },
    {
        name: 'Contact',
        id: 'contact',
        link: '/'
    }
];


function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    const scrollToSection = (sectionId: string): void => {
        const section = document.getElementById(sectionId);
        setIsOpen(false);
        section?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    return (
        <>
            <nav className="fixed hidden lg:flex flex-row bg-white w-full border-b-4 z-50">
                {navbarData.map((navbarItem, index): JSX.Element => (
                    <a 
                        key={index}
                        className="relative px-12 py-2 first:border-l-0 border-l-4 last:border-r-4 border-black bg-white font-semibold text-xl cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_black,0px_4px_0_0_black] hover:z-10"
                        onClick={() => scrollToSection(navbarItem.id)}
                    >
                        {navbarItem.name}
                    </a>
                ))}
            </nav>
            <nav className="fixed flex flex-col lg:hidden justify-end bg-white w-full border-b-4 z-50 overflow-hidden transition-all duration-700">
                <div className="flex justify-between items-center w-full bg-white p-4">
                    <h1 className="font-bold font-title text-3xl lg:text-8xl">My Portfolio</h1>
                    <button className="flex flex-col space-y-2 w-12 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className={`w-full h-2 bg-black rounded-sm transition-all duration-300 ${isOpen && 'rotate-45 translate-y-4'}`}/>
                        <div className={`w-full h-2 bg-black rounded-sm transition-all duration-300 ${isOpen && 'rotate-45'}`}/>
                        <div className={`w-full h-2 bg-black rounded-sm transition-all duration-300 ${isOpen && '-rotate-45 -translate-y-4'}`}/>
                    </button>
                </div>
                <div className={`flex flex-col transition-all duration-700 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    {navbarData.map((navbarItem, index): JSX.Element => (
                        <a 
                            key={index} 
                            className="w-full bg-white border-t-4 p-4 text-2xl font-semibold cursor-pointer" 
                            onClick={() => scrollToSection(navbarItem.id)}
                        >
                                {navbarItem.name}
                        </a>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar;