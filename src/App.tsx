import { type JSX } from 'react';
import './App.css';
import Hero from './components/Hero.tsx';
import Work from './components/Work.tsx';
import Navbar from './components/Navbar.tsx';
import Contact from './components/Contact.tsx';
import Projects from './components/Projects.tsx';

function App(): JSX.Element {
  return (
    <div className="bg-black h-full px-0">
      <Navbar/>
      <Hero 
        title="Hi, I'm Greg"
        subtitle="I'm a web developer from Leicester, England"  
      />
      <Work
        title="Professional Work"
        items={[
          {
            title: 'F1 Exhibition',
            image: 'src/assets/images/f1exhibition.png'
          },
          {
            title: 'Ghost Shell',
            image: 'src/assets/images/ghostShell.png'
          },
          {
            title: 'Capital Bop',
            image: 'src/assets/images/capitalbop.png'
          },
          {
            title: 'Meerkat Media',
            image: 'src/assets/images/meerkatMedia.png'
          },
          {
            title: 'Collective Lens',
            image: 'src/assets/images/collectiveLens.png'
          },
          {
            title: 'Artstamp',
            image: 'src/assets/images/artstamp.png'
          },
          {
            title: 'Lumiere Durham App',
            image: 'src/assets/images/lumiereDurhamApp.png'
          }
        ]}
      />
      <Projects
        title="Personal Projects"
        items={[
          {
            title: 'iTunes API App (2023)',
            image: 'src/assets/images/iTunesApp.png'
          },
          {
            title: 'Japanese Kanji App (2022)',
            image: 'src/assets/images/kanjiApp.png'
          }
        ]}
      />
      <Contact/>
    </div>
  )
}

export default App
