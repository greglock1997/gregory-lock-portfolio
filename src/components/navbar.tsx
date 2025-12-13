import { type JSX } from 'react';

function Navbar(): JSX.Element {
  return (
    <nav className="fixed flex flex-row bg-white w-full border-b-4">
        <a className="px-12 py-2 border-r-4 font-semibold text-2xl">Home</a>
        <a className="px-12 py-2 border-r-4 font-bold text-2xl">Professional Work</a>
        <a className="px-12 py-2 border-r-4 font-bold text-2xl">Personal Projects</a>
        <a className="px-12 py-2 border-r-4 font-bold text-2xl">Skills</a>
        <a className="px-12 py-2 border-r-4 font-bold text-2xl">Contact</a>
    </nav>
  )
}

export default Navbar;