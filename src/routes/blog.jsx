import { useEffect, useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'

const API_DOMAIN =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API

const Blog = () => {
  const { posts, setPosts } = useOutletContext()
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(posts.length ? false : true)

  useEffect(() => {
    if (posts.length) return
    fetch(`${API_DOMAIN}/api/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data.filter((post) => post.isPublished)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
    // .finally(() => setTimeout(() => setLoading(false), 2000))
  }, [posts, setPosts])
  return <Outlet context={{ posts, setPosts, loading }} />
}

export default Blog
