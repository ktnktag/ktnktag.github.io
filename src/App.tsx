import "./styles/App.css";

import ArrowUp from "./components/common/button/arrow-up/ArrowUp.tsx";
import Header from "./components/UI/header/Header.tsx";
import Footer from "./components/UI/footer/Footer.tsx";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useShow } from "./useShow.ts";

export default function App() {
  const { position } = useShow()
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const isSignIn = () => pathname != "/sign-in"

  return (
    <>
      {isSignIn() && <Header show={position} />}

      <main>
        <Outlet />
        {isSignIn() && <ArrowUp />}
      </main>

      {isSignIn() && <Footer />}
    </>
  );
  }
