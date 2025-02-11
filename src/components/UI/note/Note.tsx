import classes from './Note.module.css'

import Smile from '../../../assets/png/Smile.png'

export default function Note() {
    return (
        <section className={classes.note}>
            <img className={classes.image} src={Smile} alt="Smile" />
            <div className={classes.content}>
                <h2 className={classes.title}>Note</h2>
                <p className={classes.text}>
                Due to the confidentiality stipulated in a NDA, detailed information about this project's intricacies cannot be disclosed. If you have specific queries, feel free to ask, keeping in mind the confidentiality constraints.
                </p>
            </div>
        </section>
    )
}