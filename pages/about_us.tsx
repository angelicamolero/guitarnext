import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About_us.module.css'

interface AboutI {
    headline: string,
    image: string,
    paragraph: string
}

const About_us = (props: AboutI) => {
    const { headline, image, paragraph } = props
    return (
        <Layout page="about-us">
            <main className="contenedor">
                <h2 className='heading'>{headline}</h2>
                <div className={styles.content}>
                    <Image layout='responsive' width={600} height={450} src={image} alt="imagen sobre nosotros" />
                    <div>
                        <p>{paragraph}</p>
                        <p>{paragraph}</p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

About_us.defaultProps = {
    headline: 'About us',
    image: '/img/nosotros.jpg',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum imperdiet viverra. Sed volutpat justo in maximus bibendum. Duis nisl diam, accumsan egestas quam vitae, tincidunt tempus dolor. Suspendisse lacinia ligula et augue tincidunt, bibendum tempus neque aliquet. Donec accumsan cursus eros vitae porta. Quisque aliquam mi urna, sit amet auctor felis dapibus mollis. Proin ut ornare dolor. Phasellus tempor nisi sodales posuere bibendum. Aliquam erat volutpat.'
}

export default About_us