import SP1 from '../assets/png/SP/SP1.webp'
import SP2 from '../assets/png/SP/SP2.webp'
import Banner from './Banner/Banner';

export default function SideProjects() {
    return (
        <section>
            <div className='two-column'>
                <Banner
                    image={SP1}
                    title='Fostering mental well-being through a single, all-in-one mobile app'
                    company='Mental Health Platform, 2021'
                    soon={true}
                    path='#'>
                    Create an app that facilitates the process of finding and matching people with the right therapist, allowing users to track their mental health  and utilize self-help tools. Simultaneously, the app aimed to assist mental health professionals in connecting with clients and maintaining comprehensive treatment histories.
                </Banner>

                <Banner
                    image={SP2}
                    title='Daily Horoscope App'
                    company='Pet project, 2022'
                    soon={true}
                    path='#'>
                    Create an app that provides users with personalized daily horoscopes, helping them start their day with guidance based on their zodiac sign. Users can explore their horoscope predictions, track astrological events, and receive tailored advice for love, career, and well-being.
                </Banner>
            </div>
        </section>
    )
}