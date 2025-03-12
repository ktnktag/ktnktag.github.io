import './App.css'

import ArrowUp from './components/UI/arrowUp/ArrowUp.tsx'
import Header from './components/Header/Header.tsx'

import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />

      <main className='container'>
        <div className='wrapper'>
          <Outlet/>
        </div>
        <ArrowUp />
      </main>

      <footer className='footer'>
        <p>© 2025 Valeria Yakovchik</p>
      </footer>
    </>
  )
}