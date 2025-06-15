import { Link } from "react-router-dom";
import { default as LinkSvg } from "../../../assets/svg/ui/Link.svg?react";

export default function BrandedLink({ path }: { path: string }) {
  return (
    <Link to={path}>
      <LinkSvg style={{ paddingRight: 4 }} /> {path}
    </Link>
  );
}
