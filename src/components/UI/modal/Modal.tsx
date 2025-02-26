import classes from './Modal.module.css';
import { createPortal } from 'react-dom';
import { default as X } from '../../../assets/svg/X.svg?react'

interface Props {
    setIsOpen: Function,
    isOpen: boolean,
}

export default function Modal({setIsOpen, isOpen} : Props) {
    return createPortal(
        <dialog open={isOpen} className={classes.container}>
            <div className={classes.boxTitle}>
                <h3 className={classes.title}>Access Restricted</h3>
                <X onClick={() => {setIsOpen(false)}}></X>
            </div>
            <label>
                <p className={classes.text}>Some parts or the entire project work are protected by an NDA. Please enter the code to view the details.</p>
                <div className={classes.input}>
                    <input type="text" placeholder='Please enter the code here'/>
                </div>
            </label>
            <div className={classes.boxButton}>
                <button className={classes.continue}>Continue</button>
                <button className={classes.cancel} onClick={() => {setIsOpen(false)}}>Cancel</button>
            </div>
        </dialog>,
        document.getElementById('modal') as HTMLElement
    )
}