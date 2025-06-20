import BrandedLink from "../common/button/BrandedLink";

type Props = {
  title: string;
  img: string;
  children: React.ReactNode;
  path?: string;
  style?: string;
  imgStyle?: string;
};

export default function ProjectContainer({
  title,
  img,
  children,
  path,
  style = "text-container-xl",
  imgStyle = "img-header",
}: Props) {
  return (
    <>
      <header className="header-page header-content-gap">
        <div className="container text-align-center">
          {path && <BrandedLink path={path} />}
          <h1 className={style}>{title}</h1>
        </div>
        <img src={img} className={imgStyle} alt="header img" />
      </header>

      <div className="page-section container">{children}</div>
    </>
  );
}
