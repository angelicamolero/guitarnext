import Layout from '../components/Layout'
import BlogList from '../components/BlogList'

const Blog = (entries: any) => {

    const entriesArrays = entries.entries

    return (
        <Layout page="blog">
            <main className='contenedor'>
                {/* <h2 className='heading'>Blog</h2>

                <div className={styles.blog}>
                    {entriesArrays.map((entry: any) => (
                        <Entry
                            key={entry.id}
                            entry={entry} />
                    ))}
                </div> */}
                <BlogList
                    blogList={entriesArrays} />
            </main>
        </Layout>
    )
}

export async function getServerSideProps() {

    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`
    const response = await fetch(url)
    const entries = await response.json()
    return {
        props: {
            entries
        }
    }
}

export default Blog