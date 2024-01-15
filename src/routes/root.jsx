import { Outlet, useNavigation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/Header/Header.jsx'
import Loading from '../components/Loading/Loading.jsx'
import Footer from '../components/Footer/Footer.jsx'

function load(key) {
  const item = window.sessionStorage.getItem(key)
  return item != null ? JSON.parse(item) : []
}

export default function Root() {
  const navigation = useNavigation()
  const [posts, setPosts] = useState(load('posts'))

  useEffect(() => {
    const sessionposts = JSON.parse(sessionStorage.getItem('posts'))
    console.log('Session Retrieval')
    if (sessionposts) setPosts(sessionposts)
  }, [])

  useEffect(() => {
    console.log('Session Update')
    sessionStorage.setItem('posts', JSON.stringify(posts))
  }, [posts])

  return (
    <>
      <Header
        logo='..src/assets/react.svg'
        links={[
          // { title: 'Projects', route: '/', hashLink: '#projects' },
          { title: 'Projects', route: '/projects' },
          { title: 'Blog', route: '/blog' },
          // { title: 'About', route: '/about' },
          // title: <span className='material-symbols-outlined'>shopping_cart</span>,
        ]}
      />
      <main className='main page'>
        {navigation.state === 'loading' ? <Loading /> : <Outlet context={{ posts, setPosts }} />}
      </main>
      <Footer />
    </>
  )
}
