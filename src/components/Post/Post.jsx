import styles from './Post.module.css'
import { useParams, useOutletContext } from 'react-router-dom'
import Markdown from '../Markdown/Markdown'
// import { useState } from 'react'

const Post = () => {
  // const { post } = useLoaderData()
  const { posts } = useOutletContext()

  const id = useParams().postId
  const post = posts.find((post) => post._id == id)

  return (
    <section id='post' className={styles.container}>
      {/* {post.imageUrl && (
        <div className={styles.imgContainer}>
          <img src={post.imageUrl} alt={post.title} />
        </div>
      )} */}
      <div className={styles.flexContainer}>
        <div className={styles.content}>
          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.date}>{post.formattedDate}</p>
        </div>
        <div className={styles.info}>
          <p className={styles.tags}>{post.tags.map((tag) => tag.toUpperCase()).join(', ')}</p>
          <p>|</p>
          <p className={styles.time}>{`${post.readingLength} MIN READ`}</p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.markdown}>
          <Markdown markdownString={post.markdown} />
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

export default Post
