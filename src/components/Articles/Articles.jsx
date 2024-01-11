import Feature from '../Feature/Feature'
import Categories from '../Categories/Categories'
import ListItem from '../ListItem/ListItem'
import styles from './Articles.module.css'
import { useOutletContext } from 'react-router-dom'

const Articles = () => {
  const { articles } = useOutletContext()
  console.log(articles)
  return (
    <>
      <section className={styles.blog}>
        <div className={styles.blogContainer}>
          <div className={styles.posts}>
            <h2 className={styles.header}>Blog</h2>
            {/* <Categories categories={['JavaScript', 'HTML', 'CSS', 'React', 'NodeJS']} /> */}
            <ul className={styles.list}>
              {articles.map((article) => (
                <ListItem key={article.title} {...article} />
              ))}
            </ul>
          </div>
          <div className={styles.footer}></div>
        </div>
      </section>
    </>
  )
}

export default Articles
