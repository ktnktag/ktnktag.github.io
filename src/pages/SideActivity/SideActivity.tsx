import Banner from '../../components/Banner/Banner'

import Im1 from '../../assets/webp/SideActivity/SideImg1.webp'


import Cursor from '../../assets/svg/Cursor.svg'

export default function SideActivity() {
    return <>
        <header className="header">
            <div className="box alignment g-32">
                <h1 className="title">Side activity <img src={Cursor} alt='cursor' className='cursor' /></h1>
                <p className='text-box'>See how turned ideas into reality. Dive into the stories of successful product designs that make a difference.</p>
            </div>
        </header>

        <section className="section alignment">
            <div className='column-grid g-32'>
                <Banner
                    image={Im1}
                    title='Daily UI challege'
                    path='/'
                    imgName='UI design'
                    company='Daily UI challenge, 2025'>
                    Developed a new comprehensive design system and developer documentation, designed to align with the existing product design system (used externally) without duplicating it — ensuring consistency while addressing distinct needs and integrations.
                </Banner>
            </div>
        </section>
    </>
}