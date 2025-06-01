import { Link } from "react-router-dom";
import { default as LinkSvh } from "../../../assets/svg/ui/Link.svg?react"

export default function BrandedLink({path} : {path: string}) {
    return <Link to={path}><LinkSvh /> {path}</Link>
}