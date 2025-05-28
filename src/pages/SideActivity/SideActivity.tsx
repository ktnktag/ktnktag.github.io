import Card from '../../components/card/Card'

import Im1 from '../../assets/webp/SideActivity/SideImg1.webp'
import Cursor from '../../assets/svg/logos/Cursor.svg'

export default function SideActivity() {
    return <>
        <header className="hat">
            <div className="column-flex alignment g-32">
                <h1>Side activity <img src={Cursor} alt='cursor' className='cursor' /></h1>
                <p className='text-box'>See how turned ideas into reality. Dive into the stories of successful product designs that make a difference.</p>
            </div>
        </header>

        <section className="section alignment">
            <div className='column-grid g-32'>
                <Card
                    image={Im1}
                    title='Daily UI challege'
                    path='/'
                    imgName='UI design'
                    company='Daily UI challenge, 2025'>
                    Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.
                </Card>
            </div>
        </section>
    </>
}