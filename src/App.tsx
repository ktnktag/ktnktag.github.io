import './App.css'

import ArrowUp from './assets/svg/arrow-up.svg'

import Header from './components/header/Header.tsx'
import About from './components/about/About.tsx'

import { useState } from 'react'

function App() {
  const [tab, setTab] = useState<string>('About')

  return (
    <>
      <Header active={tab} onChange={setTab}></Header>
      
      <main>
        <div className='main'>
          {tab === 'About' && <About></About>}
          {tab === 'Selected Works' && <p>Selected Works</p>}
          {tab === 'Side Projects' && <p>Side Projects</p>}
        </div>

        <div className='arrow-box'>
          <a className='arrow' href="#top">
            <img src={ArrowUp} alt="arrow-up" />
          </a>
        </div>
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}

export default App
