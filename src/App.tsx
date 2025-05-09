import './App.css'

import ArrowUp from './components/UI/button/ArrowUp/ArrowUp.tsx'
// import Header from './components/header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'

import { Outlet } from 'react-router-dom'
import { useRef, useEffect } from 'react'

export default function App() {
  const lastScroll = useRef<number>(0);
  const header = useRef<Element>();
  const arrowUp = useRef<Element>();

  const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  const containHide = () => header.current?.classList.contains('hide');
  const containHideArrow = () => arrowUp.current?.classList.contains('show');

  useEffect(() => {
    header.current = document.querySelector('.header') as Element;
    arrowUp.current = document.querySelector('.arrow-up') as Element;

    window.addEventListener('scroll', () => {
      if (scrollPosition() > lastScroll.current) {
        // header show
        if (!containHide() && header.current?.children.length as number > 1) {
          header.current?.classList.add('hide');
        }

        // button show
        if (containHideArrow()) {
          arrowUp.current?.classList.remove('show');
        }
      }
      else if (scrollPosition() < lastScroll.current) {
        if (containHide()) {
          header.current?.classList.remove('hide');
        }

        if (!containHideArrow()) {
          arrowUp.current?.classList.add('show');
        }
      }

      lastScroll.current = scrollPosition();
    })
  }, [])

  return (
    <>
      {/* <Header /> */}

      <main className=''>
        <div className='wrapper'>
          <Outlet />
        </div>
        <ArrowUp />
      </main>

      <Footer />
    </>
  )
}