import cursor from "../../assets/svg/logos/Cursor.svg";

type Props = {
  img?: React.ReactNode;
  title: string;
  desc: React.ReactNode;
  content?: React.ReactNode;
};

export default function PageHeader({ title, desc, content, img }: Props) {
  return (
    <header className="header-page header-rounded">
      <div className="container header-content-gap">
        <div className="flex-column gap-32">
          {img}
          <div className="title-container">
            <h1 className="title-text">{title}</h1>
            <div className="cursor-icon">
              <img src={cursor} alt="cursor-icon" />
            </div>
          </div>
          {desc}
        </div>

        {content}
      </div>
    </header>
  );
}
