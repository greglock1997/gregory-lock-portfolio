import { type JSX } from 'react';
import './App.css';
import Hero from './components/Hero.tsx';
import Work from './components/Work.tsx';
import Navbar from './components/navbar.tsx';

function App(): JSX.Element {
  return (
    <div className="bg-black h-full px-0">
      <Navbar/>
      <Hero 
        title="Hello, I'm Greg"
        subtitle="I'm a web developer from Leicester, England"  
      />
      <Work
        title="Professional Work"
        items={[
          {
            title: 'F1 Exhibition'
          },
          {
            title: 'Ghost Shell'
          },
          {
            title: 'Capital Bop'
          },
          {
            title: 'Meerkat Media'
          },
          {
            title: 'Peace Is Loud'
          },
          {
            title: 'Artstamp'
          }
        ]}
      />
    </div>
  )
}

export default App
