import './App.css'

import Header from './components/header/Header.tsx'

import { useState } from 'react'

function App() {
  const [tab, setTab] = useState<string>('About')

  return (
    <>
      <Header active={tab} onChange={setTab}></Header>
      
      <main>
        {tab === 'About' && <p>Abouth</p>}
        {tab === 'Selected Works' && <p>Selected Works</p>}
        {tab === 'Side Projects' && <p>Side Projects</p>}
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}

export default App
