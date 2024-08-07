import { Outlet, useNavigation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Loading from '../components/Loading/Loading.jsx'
import Footer from '../components/Footer/Footer.jsx'
import ThemeSelector from '../components/ThemeSelector/ThemeSelector.jsx'
import projects from '../data/projects.js'

const API_DOMAIN =
  import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PROD_API
    : import.meta.env.VITE_DEV_API

const projectsSrcArray = projects.map((project) => project.image).filter((e, i) => i < 2)

function preloadImages(srcArray) {
  srcArray.forEach((src) => {
    preloadImage(src)
  })
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = img.onabort = function () {
      reject(src)
    }
    img.src = src
  })
}

// function load(key) {
//   const item = window.sessionStorage.getItem(key)
//   return item ? JSON.parse(item) : []
// }

export default function Root() {
  const navigation = useNavigation()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  // const [posts, setPosts] = useState(load('posts'))

  useEffect(() => {
    if (posts.length) return
    fetch(`${API_DOMAIN}/api/posts/public`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => import.meta.env.MODE === 'development' && console.log(err))
      .finally(() => setLoading(false))
    // .finally(() => setTimeout(() => setLoading(false), 2000)) // test loading state
  }, [posts, setPosts])

  useEffect(() => {
    preloadImages(projectsSrcArray)
  }, [])

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
        {navigation.state === 'loading' ? (
          <Loading />
        ) : (
          <Outlet context={{ posts, setPosts, loading }} />
        )}
      </main>
      <Footer />
      <ThemeSelector />
    </div>
  )
}
