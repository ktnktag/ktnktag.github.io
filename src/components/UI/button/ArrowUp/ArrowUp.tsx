import './ArrowUp.css'
import { default as Arrow } from '../../../../assets/svg/Arrow.svg?react'

export default function ArrowUp() {
    return (
        <div className="arrow_box">
            <a className="arrow-up" onClick={() => {window.scrollTo(0,0)}}>
                <Arrow  className="arrow_svg" />
            </a>
        </div>
    )
}