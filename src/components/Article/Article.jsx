import styles from './Article.module.css'
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
        <div className={styles.price}>${article.price}</div>
        <p className={styles.description}>{article.description}</p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor='quantity'>Quantity</label>
          </div>
          <button className={styles.btn} type='submit' disabled={true}>
            Share
          </button>
        </form>
      </div>
    </div>
  )
}

export default Article
