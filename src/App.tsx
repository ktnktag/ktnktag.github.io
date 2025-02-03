import './App.css'

import Header from './components/header/Header.tsx'

import { useState } from 'react'

function App() {
  const [tab, setTab] = useState<string>('About')

  return (
    <>
      <Header active={tab} onChange={setTab}></Header>

      {tab === 'About' && <p>Abouth</p>}
      {tab === 'Selected Works' && <p>Selected Works</p>}
      {tab === 'Side Projects' && <p>Side Projects</p>}
    </>
  )
}

export default App
