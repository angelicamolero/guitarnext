import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <Layout >
            <div className={styles.notFound}>
                <h1 className="heading">Page Not Found</h1>

                <Link href="/"> Go Home</Link>
            </div>
        </Layout>
    )
}

export default PageNotFound