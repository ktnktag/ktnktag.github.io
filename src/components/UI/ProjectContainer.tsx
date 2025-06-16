import BrandedLink from "../common/button/BrandedLink";

type Props = {
  title: string;
  img: string;
  children: React.ReactNode;
  path?: string;
  style?: string;
};

export default function ProjectContainer({
  title,
  img,
  children,
  path,
  style = "text-box-lx2",
}: Props) {
  return (
    <>
      <header className="blog-header">
        <div className="alignment text-center">
          {path && <BrandedLink path={path} />}
          <h1 className={style}>{title}</h1>
        </div>
        <img src={img} className="header-img" alt="header" />
      </header>

      <div className="alignment wrapper">{children}</div>
    </>
  );
}
