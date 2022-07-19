import Layout from '../../components/Layout'
import Image from 'next/image';
import { formatDate } from '../../helpers'
import styles from '../../styles/Entry.module.css'

const EntryBlog = (result: any) => {

    const { contenido, imagen, published_at, titulo } = result.result

    return (
        <Layout
            page={titulo}>
            <main className='contenedor'>
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entry}>
                    <Image
                        layout='responsive'
                        width={800}
                        height={600}
                        src={imagen.url}
                        alt={imagen.alternativeText} />

                    <div className={styles.content}>
                        <p className={styles.date}>{formatDate(published_at)}</p>

                        <p className={styles.text}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
}


export async function getServerSideProps(query: any) {
    const path = query?.query?.url
    const url = `${process.env.API_URL}/blogs?url=${path}`
    const response = await fetch(url)
    const result = await response.json()

    return {
        props: {
            result: result[0]
        }
    }
}

export default EntryBlog;

// export async function getStaticPaths() {
//     const url = 'http://localhost:1337/blogs'
//     const response = await fetch(url)
//     const result = await response.json()

//     const paths = result.map((entry: any) => ({
//         params: { id: entry.id.toString() }
//     }))
//     //console.log(paths);
//     return {
//         paths,
//         fallback: false
//     }
// }

// export async function getStaticProps(params: any) {
//     const id = params.id
//     console.log(params);
//     const url = `http://localhost:1337/blogs/${id}`
//     const response = await fetch(url)
//     const result = await response.json()

//     return {
//         props: {
//             result
//         }
//     }
// }