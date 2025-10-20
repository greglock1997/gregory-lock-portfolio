import { useState, type JSX } from 'react'
import './App.css'

function App(): JSX.Element {
  return (
    <div className="bg-black text-[light] h-screen">
      <div className="h-screen w-full flex items-center justify-center flex-col">
        <h1 className="text-green font-bold font-title text-8xl">Hi, I'm Greg</h1>
        <h2 className="text-green font-bold font-title text-2xl">I'm a front end web developer based in Leicester, England</h2>
      </div>
    </div>
  )
}

export default App
