import styles from './Post.module.css'
import { useParams, useOutletContext } from 'react-router-dom'
import Markdown from '../Markdown/Markdown'
import SquaresIcon from '../icons/SquaresIcon'
import { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'

const Post = () => {
  // const { post } = useLoaderData()
  const slug = useParams().postSlug
  const { posts } = useOutletContext()
  const [post, setPost] = useState(posts.find((post) => post.slug == slug))
  const [loading, setLoading] = useState(!post)

  // When the browser tab is refreshed this hook is used to wait for the Outlet context to load
  useEffect(() => {
    if (!posts.length) return
    setPost(posts.find((post) => post.slug == slug))
    setLoading(false)
  }, [post, posts, slug])

  return loading ? (
    <Loading />
  ) : (
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
        <SquaresIcon styles={{ width: '40px', color: 'var(--accent)' }} />
        <div className={styles.markdown}>
          <Markdown markdownString={post.markdown} />
        </div>
      </div>
    </section>
  )
}

export default Post
