import { Outlet, useOutletContext } from 'react-router-dom'

const Blog = () => {
  const { posts, setPosts, loading } = useOutletContext()
  // const [error, setError] = useState(null)

  return <Outlet context={{ posts, setPosts, loading }} />
}

export default Blog
