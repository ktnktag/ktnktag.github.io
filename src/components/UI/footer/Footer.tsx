import classes from "./Footer.module.css";

import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { FOOTER_LINKS } from "../../../routers/routes";

import Logo from "../../../assets/svg/logos/Logo.svg";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container flex-column">
        <div className={classes.menu}>
          <nav className={classes.page}>
            <Link to="/">
              <img src={Logo} alt="Logo" className={classes.logo} />
            </Link>

            <ul className={classes.link}>
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <hr />

        <p className={classes.text}>
          © 2025 Valeria Yakovchik. All right reserved.
        </p>
      </div>
    </footer>
  );
}
