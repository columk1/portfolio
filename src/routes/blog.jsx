import { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading.jsx'
import { Outlet, useOutletContext } from 'react-router-dom'

const Blog = () => {
  // const [posts, setPosts] = useState([])
  const { posts, setPosts } = useOutletContext()

  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(posts ? false : true)

  useEffect(() => {
    if (posts) return
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.filter((post) => post.isPublished)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  return loading ? <Loading /> : <Outlet context={{ posts, setPosts }} />
}

export default Blog
