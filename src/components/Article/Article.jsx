import styles from './Article.module.css'
import PropTypes from 'prop-types'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Article = () => {
  // const { article } = useLoaderData()
  const { articles } = useOutletContext()

  const id = useParams().articleId
  const article = articles.find((article) => article.id == id)

  // let navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.articleImg}>
        <img src={article.image} alt={article.title} />
      </div>
      <div className={styles.articleInfo}>
        <h2>{article.title}</h2>
        <p className={styles.description}>{article.description}</p>
        <button className={styles.btn} type='submit' disabled={true}>
          Share
        </button>
      </div>
    </div>
  )
}

Article.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  markdown: PropTypes.string,
  tags: PropTypes.array,
  readingLength: PropTypes.number,
}

export default Article
