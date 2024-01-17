import { Outlet, useNavigation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Loading from '../components/Loading/Loading.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ThemeSelector from '../components/ThemeSelector/ThemeSelector.jsx'

const API_DOMAIN =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API

function load(key) {
  const item = window.sessionStorage.getItem(key)
  return item != null ? JSON.parse(item) : []
}

export default function Root() {
  const navigation = useNavigation()
  const [posts, setPosts] = useState(load('posts'))

  useEffect(() => {
    if (posts.length) return
    const sessionPosts = JSON.parse(sessionStorage.getItem('posts'))
    // console.log('Session Retrieval')
    if (sessionPosts) {
      setPosts(sessionPosts)
    } else {
      fetch(`${API_DOMAIN}/api/posts`)
        .then((res) => res.json())
        .then((data) => setPosts(data.filter((post) => post.isPublished)))
      // .catch((err) => console.log(err))
    }
  }, [])

  useEffect(() => {
    // console.log('Session Update')
    sessionStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <div className='mainContainer'>
      <Header
        logo='..src/assets/react.svg'
        links={[
          // { title: 'Projects', route: '/', hashLink: '#projects' },
          { title: 'Projects', route: '/projects' },
          { title: 'Blog', route: '/blog' },
          // { title: 'About', route: '/about' },
        ]}
      />
      <main className='main page'>
        {navigation.state === 'loading' ? <Loading /> : <Outlet context={{ posts, setPosts }} />}
      </main>
      <Footer />
      <ThemeSelector />
    </div>
  )
}
