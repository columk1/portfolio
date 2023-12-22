import Feature from '../Feature/Feature'
import Categories from '../Categories/Categories'
import Card from '../Card/Card'
import styles from './Articles.module.css'
import { useOutletContext } from 'react-router-dom'

const Articles = () => {
  const { articles } = useOutletContext()
  console.log(articles)
  return (
    <>
      <section className={styles.featured}>
        <Feature {...articles[0]} />
      </section>
      <section className={styles.articles}>
        <Categories categories={['React', 'Javascript', 'HTML', 'CSS']} />
        <div className={styles.grid}>
          {articles.map((article) => (
            <Card key={article.title} {...article} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Articles
