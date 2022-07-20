import Link from "next/link"
import styles from '../styles/Header.module.css'
import Image from "next/image"
import { Fragment } from "react";
import { useRouter } from "next/router";

const Header = (product: any) => {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href="/" passHref>
                        <a> <Image width={400} height={100} alt="Guitar LA logo" src='/img/logo.svg' /></a>
                    </Link>

                    <nav className={styles.nav}>
                        <Link href="/"> Home </Link>
                        <Link href="/about_us"> About Us</Link>
                        <Link href="/blog"> Blog</Link>
                        <Link href="/store"> Store</Link>
                        <Link href="/cart">
                            <a href="">
                                <Image layout='fixed' width={30} height={25} src="/img/carrito.png" alt="icon cart" />
                            </a>
                        </Link>
                    </nav>
                </div>
                {
                    product.product !== '' ?
                        <div className={styles.model}>
                            <h2>Modelo {product.product.name}</h2>
                            <p>{product.product.description}</p>
                            <p className={styles.price}>${product.product.price}</p>

                            <Link href={`/guitars/${product.product.url}`}>
                                <a href="" className={styles.link}>See Product</a>
                            </Link>
                        </div>
                        : <Fragment />
                }
            </div>

            {router.pathname === '/' && (
                <div className={styles.guitar_banner}>
                    <Image
                        src="/img/header_guitarra.png"
                        alt="image header guitar"
                        width={500}
                        height={1200}
                        layout='fixed' />
                </div>

            )}
        </header>
    )
}

export default Header;