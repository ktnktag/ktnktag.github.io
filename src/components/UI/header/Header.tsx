import classes from "./Header.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavButton } from "./nav-button/NavButton";
import { MENU_LINKS } from "../../../routers/routes";

import logo from "../../../assets/svg/logos/Logo.svg";
import burger from "../../../assets/svg/ui/Burger.svg";
import x from "../../../assets/svg/ui/XBurger.svg";

export default function Header({ show }: { show: boolean }) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const toggleMenu = () => setIsShowMenu(!isShowMenu);
  const closeMenu = () => setIsShowMenu(false);

  useEffect(() => {
    isShowMenu
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");

    return () => {
      document.body.classList.remove("lock");
    };
  }, [isShowMenu]);

  return (
    <header className={`${classes.header} ${show ? classes.show : ""}`}>
      <nav className={`${classes.container} container`}>
        <Link to="/" onClick={closeMenu} className={classes.logo}>
          <img src={logo} alt="logo" />
        </Link>

        <ul className={`${classes.menu} ${isShowMenu ? classes.menuOpen : ""}`}>
          {MENU_LINKS.map((link) => (
            <NavButton
              key={link.name}
              name={link.name}
              path={link.path}
              onClick={closeMenu}
            />
          ))}
        </ul>

        <div className={classes.burger}>
          <div className={classes.divider} />
          <img
            src={isShowMenu ? x : burger}
            alt="burger"
            onClick={toggleMenu}
          />
        </div>
      </nav>
    </header>
  );
}
