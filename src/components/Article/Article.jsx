import styles from './Article.module.css'
import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import he from 'he'
import Markdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

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
