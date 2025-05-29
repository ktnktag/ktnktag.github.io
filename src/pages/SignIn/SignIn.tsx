import classes from './SignIn.module.css';

import Eye from '../../assets/svg/ui/Eye.svg';
import EyeOff from '../../assets/svg/ui/Eye-off.svg';
import {default as Lock} from '../../assets/svg/ui/lock.svg?react';
import {default as Return} from '../../assets/svg/ui/return.svg?react';

import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export default function SignIn() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [isShow, setIsShow] = useState('password');

    return <section className={classes.container}>
        <div>
            <h1>Private content</h1>
            <p>Enter passcode to continue. <br /> Contact me if you need access to the project</p>
        </div>

        <form className={classes.form}>
            <div className={classes.inputBox}>
                <input
                    type={isShow}
                    placeholder='Enter passcode here'
                    className={classes.input}
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}/>
                <img src={isShow == "password" ? EyeOff : Eye} alt="eye" className={classes.icon} onClick={() => { setIsShow(isShow === "password" ? "text" : "password") }} />
            </div>
            <label className={classes.button}>
                <Lock />
                <input type="submit" value={"Unlock"}  />
            </label>
        </form>

        <p onClick={() => navigate(-1)} className="return"> <Return />Return to Projects</p>
    </section>
}