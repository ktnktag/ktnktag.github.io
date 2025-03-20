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
            element?.classList.remove("lock");
        }
    }, [isOpen])

    return createPortal(
        <dialog ref={dialogRef} className={classes.container}
                onKeyDown={(e) => {e.code === 'Enter' ? checkCode(code, setErrorCode) : null } }>
                    
            <div className={classes.boxTitle}>
                <h3 className={classes.title}>Access Restricted</h3>
                <X onClick={() => { setIsOpen(false) }} />
            </div>

            <div id='inputCode' className={classes.boxInput}>
                <p className={classes.text}>Some parts or the entire project work are protected by an NDA. Please enter the code to view the details.</p>
                
                <label className={`${classes.input} ${errorCode ? classes.error : ''}`}>
                    <input  type="text"
                            id='code'
                            value={code} 
                            onChange={e => setCode(e.target.value)} 
                            onKeyDown={(e) => {e.code === 'Enter' ? checkCode(code, setErrorCode) : null } } 
                            placeholder='Please enter the code here' />

                    {!errorCode && <p className={classes.hintText}>Contact me if you need access to the project</p>}
                    {errorCode && <p className={classes.errorText}>{errorCode}</p>}
                </label>
            </div>

            <div className={classes.boxButton}>
                <button className={classes.continue} onClick={() => checkCode(code, setErrorCode)}>Continue</button>
                <button className={classes.cancel} onClick={() => { setIsOpen(false) }}>Cancel</button>
            </div>
        </dialog>,
        document.getElementById('modal') as HTMLElement
    )
}