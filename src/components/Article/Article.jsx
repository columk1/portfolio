import styles from './Article.module.css'
import PropTypes from 'prop-types'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import he from 'he'

const Article = () => {
  // const { article } = useLoaderData()
  const { articles } = useOutletContext()

  const id = useParams().articleId
  const article = articles.find((article) => article.id == id)

  let markdown = he.decode(article.markdown)

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
          <p className={styles.tags}>{article.tags.map((tag) => tag.toUpperCase())}</p>
          <p>|</p>
          <p className={styles.time}>{`${article.readingLength} MIN READ`}</p>
        </div>
        <div className={styles.markdown}>
          <Markdown
            children={markdown}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag='div'
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={vscDarkPlus}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              },
            }}
          />
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
