import Product from "./Product"
import styles from '../styles/PLP.module.css'

const PLP = (guitars: any) => {
    const collections = guitars.guitars.result
    return (
        <div className={styles.list}>
            {collections.map((guitar: any) => (
                <Product key={guitar.url} guitar={guitar} />
            ))}
        </div>
    )
}
export default PLP