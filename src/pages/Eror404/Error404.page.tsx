import classes from "./Error404.module.css";

import { useNavigate } from "react-router-dom";
import Header from "../../components/UI/header/Header";
import erorImage from "../../assets/webp/Eror404/Eror404.webp";

import { default as Return } from "../../assets/svg/ui/return.svg?react";

export default function Error404() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main className={classes.container}>
        <div>
          <h1 className={classes.title}>Oooops</h1>
          <div className={classes.text}>
            <p className="eyebrow">Something went wrong.</p>
            <p className="eyebrow">the page you requested could no be found</p>
            <p className="eyebrow">Please go back to the home page</p>
          </div>
        </div>
        <p onClick={() => navigate(-1)} className="return">
          <Return />
          Return to Previous Page
        </p>
      </main>

      <img className={classes.img} src={erorImage} alt="eror image" />
    </>
  );
}
