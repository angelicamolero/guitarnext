import Link from "next/link"
import styles from '../styles/Header.module.css'

const Header = () => {
   
    return(
        <header className={styles.header}>
            <div className="contenedor">
                <div>

                </div>

                <nav>
                    <Link href="/"> Home </Link>
                    <Link href="/"> About Us</Link>
                    <Link href="/"> Blog</Link>
                    <Link href="/"> Store</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;