import './App.css'

import ArrowUp from './components/UI/arrowUp/ArrowUp.tsx'
import Header from './components/header/Header.tsx'
import About from './components/about/About.tsx'
import SelectedWorks from './components/selectedWorks/SelectedWorks.tsx'
import RedesignWorkshop from './components/redesignWorkshop/RedesignWorkshop.tsx'
import HyperspacePortal from './components/hyperspacePortal/HyperspacePortal.tsx'

import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState<string>('About')

  return (
    <>
      <Header active={tab} onChange={setTab}></Header>

      <main>
        <div className='wrapper'>
          {tab === 'About' && <About></About>}
          {tab === 'Selected Works' && <SelectedWorks onChange={setTab}></SelectedWorks>}
          {tab === 'Side Projects' && <p>Side Projects</p>}

          {tab === 'Hyperspace Portal' && <HyperspacePortal></HyperspacePortal>}
          {tab === 'Redesign Workshop' && <RedesignWorkshop onChange={setTab}></RedesignWorkshop>}
        </div>
        <ArrowUp></ArrowUp>
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}