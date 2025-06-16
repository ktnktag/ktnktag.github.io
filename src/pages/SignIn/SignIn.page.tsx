import classes from "./SignIn.module.css";

import { default as Return } from "../../assets/svg/ui/return.svg?react";

import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { CheckCode } from "../../routers/api";

import Submit from "../../components/common/button/submit/Submit";
import InputCode from "../../components/common/input/InputCode";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const [passcode, setPasscode] = useState("");
  const [errorPasscode, setErrorPasscode] = useState("");
  const [isShow, setIsShow] = useState("password");

  const path = location.state?.from?.pathname ?? "/";

  const validate = () => {
    setErrorPasscode("");

    if (!passcode) {
      setErrorPasscode("code not specified");
      return false;
    }

    if (!CheckCode(passcode)) {
      setErrorPasscode("the code is not correct");
      return false;
    }

    return true;
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!validate()) {
      return null;
    }

    navigate(path);
  };

  return (
    <main className={classes.container}>
      <div>
        <h1>Private content</h1>
        <p className="eyebrow">
          Enter passcode to continue. <br /> Contact me if you need access to
          the project
        </p>
      </div>

      <form
        className={classes.form}
        onSubmit={handleFormSubmit}
        onReset={() => setPasscode("")}
      >
        <InputCode
          error={errorPasscode}
          isShow={isShow}
          setIsShow={setIsShow}
          value={passcode}
          setValue={setPasscode}
        />

        <Submit />
      </form>

      <p onClick={() => navigate(-3)} className="return">
        {" "}
        <Return />
        Return to Projects
      </p>
    </main>
  );
}
