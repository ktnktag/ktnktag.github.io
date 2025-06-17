import classes from "./Header.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavButton } from "./nav-button/NavButton";

import logo from "../../../assets/svg/logos/Logo.svg";
import burger from "../../../assets/svg/ui/Burger.svg"
import x from "../../../assets/svg/ui/XBurger.svg"

export default function Header({ show }: { show: boolean }) {
  const [isShowMenu, setIsShowMenu] = useState(false)

  const toggleMenu = () => setIsShowMenu(!isShowMenu);
  const closeMenu = () => setIsShowMenu(false);

  useEffect(() => {
    isShowMenu
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock")

    return () => {
      document.body.classList.remove("lock");
    };
  }, [isShowMenu]);

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/resume",
      name: "Resume",
    }
  ]

  return (
    <header className={`${classes.header} ${show ? classes.show : ""}`}>
      <nav className={`${classes.container} alignment`}>
        <Link to="/" onClick={closeMenu} className={classes.logo}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`${classes.menu} ${isShowMenu ? classes.menuOpen : ""}`}>
          {links.map((item) => <NavButton key={item.name} name={item.name} path={item.path} onClick={closeMenu} />)}
        </ul>

        <div className={classes.burger}>
          <span className={classes.separator}></span>
          <img src={isShowMenu ? x : burger} alt="burger" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
}
