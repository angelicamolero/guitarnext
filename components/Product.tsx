import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Product.module.css'

const Product = (guitar: any) => {
    const { image, description, name, price, url } = guitar.guitar

    return (
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
                <Link href={`/guitars/${url}`}>
                    <a href="" className={styles.link}>See Product</a>
                </Link>
            </div>
        </div>
    )
}

export default Product;