import { useEffect, useState } from 'react'
import Loading from '../components/Loading/Loading.jsx'
import { Outlet, useOutletContext } from 'react-router-dom'

const Blog = () => {
  // const [articles, setArticles] = useState([])
  const { articles, setArticles } = useOutletContext()

  // const [data, setData] = useState(null)
  // const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then((res) => res.json())
      .then((data) => setArticles(data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])
  return loading ? <Loading /> : <Outlet context={{ articles }} />
}

export default Blog
