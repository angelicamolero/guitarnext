import { formatDate } from '../helpers/index'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Entry.module.css'

const Entry = (entry: any) => {
    const { titulo, resumen, imagen, published_at, _id, url } = entry.entry

    return (
        <article>
            <Image
                src={imagen.url}
                alt={imagen.alternativeText}
                width={800}
                height={600}
                layout='responsive'
                priority={true} />
            <div className={styles.content}>
                <h3>{titulo}</h3>
                <p className={styles.date}>{formatDate(published_at)}</p>
                <p className={styles.resume}>{resumen}</p>
                <Link href={`/blog/${url}`}>
                    <a className={styles.link}>Read more</a>
                </Link>
            </div>
        </article>
    );
}

export default Entry;