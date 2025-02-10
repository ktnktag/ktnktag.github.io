import './App.css'

import ArrowUp from './components/UI/button/arrowUp/ArrowUp.tsx'
import Header from './components/header/Header.tsx'
import About from './components/about/About.tsx'
import SelectedWorks from './components/selectedWorks/SelectedWorks.tsx'

import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState<string>('About')

  return (
    <>
      <Header active={tab} onChange={setTab}></Header>

      <main>
        <div className='main'>
          {tab === 'About' && <About></About>}
          {tab === 'Selected Works' && <SelectedWorks></SelectedWorks>}
          {tab === 'Side Projects' && <p>Side Projects</p>}
        </div>

        <ArrowUp></ArrowUp>
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}