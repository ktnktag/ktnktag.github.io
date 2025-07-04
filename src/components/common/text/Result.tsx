type Props = {
  name: string;
  isLarge?: boolean;
  children: React.ReactNode;
};

export default function Result({ name, children, isLarge = false }: Props) {
  return (
    <div className={`testimonial ${isLarge ? "grid-col-span-2" : ""}`}>
      <h3>{name}</h3>
      {children}
    </div>
  );
}
