import './App.css'

import ArrowUp from './components/UI/arrowUp/ArrowUp.tsx'
import Header from './components/header/Header.tsx'
import About from './components/about/About.tsx'
import SelectedWorks from './components/SelectedWorks.tsx'
import SideProjects from './components/SideProjects.tsx'
import DesignSystem from './components/DesignSystem.tsx'
import HyperspacePortal from './components/HyperspacePortal.tsx'
import DocumentationPage from './components/DocumentationPage.tsx'
import ComponentPage from './components/ComponentPage.tsx'
import AdidasPage from './components/AdidasPage.tsx'

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
          {tab === 'Side Projects' && <SideProjects></SideProjects>}

          {tab === 'Hyperspace Portal' && <HyperspacePortal></HyperspacePortal>}
          {tab === 'Design System' && <DesignSystem onChange={setTab}></DesignSystem>}
          {tab === 'Documentation Page' && <DocumentationPage onChange={setTab}></DocumentationPage>}
          {tab === 'Component Page' && <ComponentPage onChange={setTab}></ComponentPage>}
          {tab === 'Adidas Page' && <AdidasPage onChange={setTab}></AdidasPage>}

        </div>
        <ArrowUp></ArrowUp>
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}