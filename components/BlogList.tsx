import Entry from '../components/Entry'
import styles from '../styles/Blog.module.css'

const BlogList = (blogList: any) => {
    const list = blogList.blogList
    return (
        <>
            <h2 className='heading'>Blog</h2>

            <div className={styles.blog}>
                {list.map((entry: any) => (
                    <Entry
                        key={entry.id}
                        entry={entry} />
                ))}
            </div>
        </>
    )
}
export default BlogList;