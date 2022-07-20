import Image from "next/image"
import styles from '../../styles/Product.module.css'
import Layout from "../../components/Layout"
import { useState } from "react"
import { imageConfigDefault } from "next/dist/server/image-config"

interface guitarProps {
    result: any;
    addToCart: (product: any) => void;
}

const Guitar = (props: guitarProps) => {
    const { result, addToCart } = props
    const [quantity, setQuantity] = useState(1)
    const { image, description, name, price, url, id } = result?.[0]

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (quantity < 1) {
            alert('Quantity is not valid')
            return;
        }

        const productSelected = {
            id,
            image: image?.[0].url,
            name,
            price,
            quantity
        }

        addToCart(productSelected)
    }

    return (

        <Layout
            page={url}>
            <div className={styles.guitar}>
                <Image
                    layout='responsive'
                    width={180}
                    height={350}
                    src={image?.[0].url}
                    alt={image?.[0].alternativeText} />

                <div className={styles.content}>
                    <h3>{name}</h3>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="">Quantity</label>

                        <select value={quantity} onChange={e => setQuantity(parseInt(e.target.value))}>
                            <option value="0">-- Select --</option>
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