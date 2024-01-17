import ListItem from '../ListItem/ListItem'
import styles from './Posts.module.css'
import Loading from '../Loading/Loading.jsx'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'

const tags = ['JavaScript', 'HTML', 'CSS', 'React', 'NodeJS', 'All']

const Posts = () => {
  const { posts, loading } = useOutletContext()
  const [filter, setFilter] = useState('All')

  // console.log(posts)
  return (
    <>
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className={styles.tags}>
            <ul className={styles.tagsList}>
              {tags.map((tag) => (
                <button key={tag} onClick={() => setFilter(tag)} className={styles.tag}>
                  <li className={styles.tag}>
                    {filter === tag ? (
                      <span className={styles.checked}>■</span>
                    ) : (
                      <span className={styles.unchecked}>□</span>
                    )}
                    {tag}
                  </li>
                </button>
              ))}
            </ul>
          </div>
          <div className={styles.posts}>
            <h2 className={styles.header}>Blog</h2>
            {loading ? (
              <Loading />
            ) : (
              <ul className={styles.list}>
                {posts
                  .filter((post) => filter === 'All' || post.tags.includes(filter))
                  .map((post) => (
                    <ListItem key={post.title} {...post} />
                  ))}
              </ul>
            )}
          </div>
          <div className={styles.footer}></div>
        </div>
      </section>
    </>
  )
}

export default Posts
