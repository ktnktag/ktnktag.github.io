import classes from "./InputCode.module.css";

import eye from "../../../assets/svg/ui/Eye.svg";
import eyeOff from "../../../assets/svg/ui/Eye-off.svg";

type Props = {
  error: string;
  isShow: string;
  setIsShow: Function;
  value: string;
  setValue: Function;
};

export default function InputCode({
  error,
  isShow,
  setIsShow,
  value,
  setValue,
}: Props) {
  return (
    <div className={classes.container}>
      <input
        type={isShow}
        placeholder="Enter passcode here"
        className={
          !!error ? `${classes.input} ${classes.error}` : classes.input
        }
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />

      <img
        src={isShow == "password" ? eyeOff : eye}
        alt="eye"
        className={classes.icon}
        onClick={() => {
          setIsShow(isShow === "password" ? "text" : "password");
        }}
      />
    </div>
  );
}
