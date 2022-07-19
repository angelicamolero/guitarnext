import Image from "next/image"
import styles from '../../styles/Product.module.css'
import Layout from "../../components/Layout"

const Guitar = (result: any) => {
    const { image, description, name, price, url } = result.result[0]

    return (

        <Layout
            page={url}>
            <div className={styles.guitar}>
                <Image
                    layout='responsive'
                    width={180}
                    height={350}
                    src={image[0].url}
                    alt={image[0].alternativeText} />

                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>

                    <form action="submit" className={styles.form}>
                        <label htmlFor="">Quantity</label>

                        <select name="" id="">
                            <option value="">-- Select --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                        <input type="submit" value="Add to Cart" />
                    </form>

                </div>
            </div>
        </Layout>

    )
}

export async function getServerSideProps(query: any) {
    const path = query?.query?.url
    const url = `${process.env.API_URL}/guitars?url=${path}`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            result
        }
    }
}

export default Guitar