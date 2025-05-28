import classes from './Testimonial.module.css'

type Props = {
    children: React.ReactNode;
    name: string;
    img?: string;
    profession?: string;
}

export default function Testimonial({ children, name, img, profession }: Props) {
    return <article className={classes.container}>
        <div className={classes.header}>
            {profession ?
                <>
                    <img src={img} alt={name} className={classes.img} />
                    <span>
                        <h3>{name}</h3>
                        <p className={classes.prof}>{profession}</p>
                    </span>
                </> :
                <h2>{name}</h2>
            }
        </div>

        <p className={classes.text}>{children}</p>
    </article>
}