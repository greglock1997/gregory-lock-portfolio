import { type JSX } from 'react';
import './App.css';
import Hero from './components/Hero.tsx';
import Work from './components/Work.tsx';
import Navbar from './components/Navbar.tsx';
import Contact from './components/Contact.tsx';
import Projects from './components/Projects.tsx';
import f1exhibition from './assets/images/f1exhibition.png';
import ghostShell from './assets/images/ghostShell.png';
import capitalBop from './assets/images/capitalbop.png';
import meerkatMedia from './assets/images/meerkatMedia.png';
import collectiveLens from './assets/images/collectiveLens.png';
import artstamp from './assets/images/artstamp.png';
import lumiereDurhamApp from './assets/images/lumiereDurhamApp.png';
import iTunesApp from './assets/images/iTunesApp.png';
import kanjiApp from './assets/images/kanjiApp.png';


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
            image: f1exhibition,
            link: 'https://f1exhibition.com/'
          },
          {
            title: 'Ghost Shell',
            image: ghostShell,
            link: 'https://ghostshellgame.com/'
          },
          {
            title: 'Capital Bop',
            image: capitalBop,
            link: 'https://www.capitalbop.com/'
          },
          {
            title: 'Meerkat Media',
            image: meerkatMedia,
            link: 'https://meerkatmedia.org/'
          },
          {
            title: 'Collective Lens',
            image: collectiveLens,
            link: 'https://peaceisloud.org/collectivelenslibrary/'
          },
          {
            title: 'Artstamp',
            image: artstamp,
            link: 'https://artstamp.com/'
          },
          {
            title: 'Lumiere Durham App',
            image: lumiereDurhamApp,
            link: 'https://apps.apple.com/gb/app/lumiere-durham/id1478642384'
          }
        ]}
      />
      <Projects
        title="Personal Projects"
        items={[
          {
            title: 'iTunes API App (2023)',
            image: iTunesApp,
            link: 'https://greglock1997.github.io/React-API-App/'
          },
          {
            title: 'Japanese Kanji App (2022)',
            image: kanjiApp,
            link: 'https://kanji-app.onrender.com/login'
          }
        ]}
      />
      <Contact/>
    </div>
  )
}

export default App
