import styles from './Article.module.css'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import Markdown from '../../components/Markdown/Markdown'
// import { useState } from 'react'

const Article = () => {
  // const { article } = useLoaderData()
  const { articles } = useOutletContext()

  const id = useParams().articleId
  const article = articles.find((article) => article._id == id)

  // let navigate = useNavigate()

  return (
    <section id='article' className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={article.imageUrl} alt={article.title} />
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.content}>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.date}>{article.formattedDate}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.tags}>{article.tags.map((tag) => tag.toUpperCase()).join(', ')}</p>
          <p>|</p>
          <p className={styles.time}>{`${article.readingLength} MIN READ`}</p>
        </div>
        <div className={styles.markdown}>
          <Markdown markdownString={article.markdown} />
        </div>
      </div>
    </section>
  )
}

// Article.propTypes = {
//   id: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   author: PropTypes.string,
//   imageUrl: PropTypes.string,
//   markdown: PropTypes.string,
//   tags: PropTypes.array,
//   readingLength: PropTypes.number,
// }

export default Article
