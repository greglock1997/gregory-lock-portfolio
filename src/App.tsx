import { type JSX } from 'react'
import './App.css'
import Hero from './components/Hero.tsx';

function App(): JSX.Element {
  return (
    <div className="bg-black h-full px-8">
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <Hero 
          title="Hello, I'm Greg"
          subtitle="I'm a web developer from Leicester, England"  
        />
      </div>
    </div>
  )
}

export default App
