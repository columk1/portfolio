import Feature from '../Feature/Feature'
import Categories from '../Categories/Categories'
import ListItem from '../ListItem/ListItem'
import styles from './Posts.module.css'
import { useOutletContext } from 'react-router-dom'
const tags = ['JavaScript', 'HTML', 'CSS', 'React', 'NodeJS']

const Posts = () => {
  const { posts } = useOutletContext()
  console.log(posts)
  return (
    <>
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className={styles.tags}>
            <ul className={styles.tagsList}>
              {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  <span className={styles.unchecked}>□</span>
                  {tag}
                </li>
              ))}
              <li className={styles.tag}>
                <span className={styles.checked}>■</span>All
              </li>
            </ul>
          </div>
          <div className={styles.posts}>
            <h2 className={styles.header}>Blog</h2>
            {/* <Categories categories={['JavaScript', 'HTML', 'CSS', 'React', 'NodeJS']} /> */}
            <ul className={styles.list}>
              {posts.map((post) => (
                <ListItem key={post.title} {...post} />
              ))}
            </ul>
          </div>
          <div className={styles.footer}></div>
        </div>
      </section>
    </>
  )
}

export default Posts
