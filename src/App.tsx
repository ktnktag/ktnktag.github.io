import './App.css'

import ArrowUp from './components/UI/arrowUp/ArrowUp.tsx'
import Header from './components/header/Header.tsx'
import About from './components/about/About.tsx'
import SelectedWorks from './components/selectedWorks/SelectedWorks.tsx'
import DesignSystem from './components/designSystem/DesignSystem.tsx'

import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState<string>('About')

  return (
    <>
      <Header active={tab} onChange={setTab}></Header>

      <main>
        <div className='main'>
          {tab === 'About' && <About></About>}
          {tab === 'Selected Works' && <SelectedWorks onChange={setTab}></SelectedWorks>}
          {tab === 'Side Projects' && <p>Side Projects</p>}

          {tab === 'Design System' && <DesignSystem></DesignSystem>}
        </div>

        <ArrowUp></ArrowUp>
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}