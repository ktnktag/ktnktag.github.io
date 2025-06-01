type Props = {
    name: string,
    children: React.ReactNode,
}

export default function Result({name, children} : Props) {
    return <div className="testimonial">
        <h3>{name}</h3>
        {children}
    </div>
}