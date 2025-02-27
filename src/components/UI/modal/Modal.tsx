import classes from './Modal.module.css';
import { createPortal } from 'react-dom';
import { default as X } from '../../../assets/svg/X.svg?react'

import { useState, useRef, useEffect } from 'react';

interface Props {
    setIsOpen: Function,
    isOpen: boolean,
    checkCode: Function,
}

export default function Modal({ setIsOpen, isOpen, checkCode }: Props) {
    const [code, setCode] = useState<string>('');
    const [errorCode, setErrorCode] = useState<string>('');
    const dialogRef = useRef<HTMLDialogElement>(null);
    const element = document.getElementById("body");

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
            setCode('');
            setErrorCode('');
            element?.classList.add("lock");
        }
        else {
            dialogRef.current?.close();
            element?.classList.toggle("lock");
        }
    }, [isOpen])

    return createPortal(
        <dialog ref={dialogRef} className={classes.container}>
            <div className={classes.boxTitle}>
                <h3 className={classes.title}>Access Restricted</h3>
                <X onClick={() => { setIsOpen(false) }}></X>
            </div>
            <label>
                <p className={classes.text}>Some parts or the entire project work are protected by an NDA. Please enter the code to view the details.</p>
                <div className={`${classes.input} ${errorCode ? classes.error : ''}`}>
                    <input type="text" value={code} onChange={e => setCode(e.target.value)} placeholder='Please enter the code here' />
                </div>
            </label>
            <div className={classes.boxButton}>
                <button className={classes.continue} onClick={() => checkCode(code, setErrorCode)}>Continue</button>
                <button className={classes.cancel} onClick={() => { setIsOpen(false) }}>Cancel</button>
            </div>
        </dialog>,
        document.getElementById('modal') as HTMLElement
    )
}