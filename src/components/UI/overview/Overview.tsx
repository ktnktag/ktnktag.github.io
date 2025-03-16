import classes from './Overview.module.css'

interface Props {
    client: string;
    expertise: string;
    deliverables?: string;
    tools: string;
    year: string;
}


export default function Overview({ client, expertise, deliverables, tools, year }: Props) {
    return (
        <section>
            <h3 className='title'>Project Overview</h3>

            <ul>
                <li className={classes.content}>
                    <p className={classes.name}>Client</p>
                    <img src={client} alt="client" />
                </li>
                <li className={classes.content}>
                    <p className={classes.name}>Expertise</p>
                    <p className={classes.text}>{expertise}</p>
                </li>
                {
                    deliverables !== undefined &&
                    <li className={classes.content}>
                        <p className={classes.name}>Deliverables</p>
                        <p className={classes.text}>{deliverables}</p>
                    </li>
                }
                <li className={classes.content}>
                    <p className={classes.name}>Tools</p>
                    <p className={classes.text}>{tools}</p>
                </li>
                <li className={classes.content}>
                    <p className={classes.name}>Year</p>
                    <p className={classes.text}>{year}</p>
                </li>
            </ul>
        </section>
    )
}