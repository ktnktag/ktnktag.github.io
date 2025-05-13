import './App.css'

import ArrowUp from './components/UI/button/ArrowUp/ArrowUp.tsx'
import Header from './components/header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'

import { Outlet } from 'react-router-dom'
import { useRef, useEffect } from 'react'

export default function App() {
  const lastScroll = useRef<number>(0);
  const header = useRef<Element>();
  const arrowUp = useRef<Element>();

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => arrowUp.current?.classList.contains('show');

  useEffect(() => {
    header.current = document.querySelector('.header-menu') as Element;
    arrowUp.current = document.querySelector('.arrow-up') as Element;

    window.addEventListener('scroll', () => {
      if (scrollPosition() > lastScroll.current) {
        if (containHide()) {
          arrowUp.current?.classList.remove('show');
          header.current?.classList.remove('header-fix');
          header.current?.classList.add('header-abs');
        }
      }
      else if (scrollPosition() < lastScroll.current) {
        if (!containHide()) {
          arrowUp.current?.classList.add('show');
          header.current?.classList.add('header-fix');
          header.current?.classList.remove('header-abs');
        }
      }

      lastScroll.current = scrollPosition();
    })
  }, [])

  return (
    <>
      <Header />

      <main>
        <Outlet />
        <ArrowUp />
      </main>

      <Footer />
    </>
  )
}