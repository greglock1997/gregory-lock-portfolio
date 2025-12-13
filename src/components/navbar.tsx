import { type JSX, useState } from 'react';

interface NavbarItem {
  name: string;
  link: string;
}

const navbarData: NavbarItem[] = [
    {
        name: 'Home',
        link: '/'
    },
        {
        name: 'Work',
        link: '/'
    },
        {
        name: 'Projects',
        link: '/'
    },
    {
        name: 'Skills',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/'
    }
];

function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<Boolean>(false);

    return (
        <>
            <nav className="fixed hidden md:flex flex-row bg-white w-full border-b-4 z-50">
                {navbarData.map((navbarItem, index): JSX.Element => (
                    <a key={index}   className="relative px-12 py-2 first:border-l-0 border-l-4 last:border-r-4 border-black bg-white font-semibold text-xl cursor-pointer transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_black,0px_4px_0_0_black] hover:z-10">{navbarItem.name}</a>
                ))}
            </nav>
            <nav className="fixed flex flex-col md:hidden justify-end bg-white w-full border-b-4 z-50">
                <div className="flex justify-end w-full bg-white p-4">
                    <button className="flex flex-col space-y-2 w-12 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <div className={`w-full h-2 bg-black rounded-sm transition-all duration-300 ${isOpen && 'rotate-45 translate-y-4'}`}/>
                        <div className={`w-full h-2 bg-black rounded-sm transition-all duration-300 ${isOpen && 'rotate-45'}`}/>
                        <div className={`w-full h-2 bg-black rounded-sm transition-all duration-300 ${isOpen && '-rotate-45 -translate-y-4'}`}/>
                    </button>
                </div>
                {isOpen && navbarData.map((navbarItem, index): JSX.Element => (
                    <a key={index} className="w-full bg-white border-t-4 p-4 text-2xl font-semibold" href={navbarItem.link}>{navbarItem.name}</a>
                ))}
            </nav>
        </>
    )
}

export default Navbar;