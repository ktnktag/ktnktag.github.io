import classes from './Image.module.css'

interface Props {
    imgPath: string;
    title?: string;
}

export default function Image({imgPath, title} : Props) {
    return(
        <div className={classes.box}>
            <img className={classes.img} src={imgPath} alt={title !== undefined ? title : "image"} />
            {title !== undefined && <h4 className={classes.title}>{title}</h4>}
        </div>
    )
}