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
  const [articles, setArticles] = useState(load('articles'))

  useEffect(() => {
    const sessionArticles = JSON.parse(sessionStorage.getItem('articles'))
    console.log('Session Retrieval')
    if (sessionArticles) setArticles(sessionArticles)
  }, [])

  useEffect(() => {
    console.log('Session Update')
    sessionStorage.setItem('articles', JSON.stringify(articles))
  }, [articles])

  return (
    <>
      <Header
        logo='..src/assets/react.svg'
        links={[
          // { title: 'Projects', route: '/', hashLink: '#projects' },
          { title: 'Projects', route: '/projects' },
          { title: 'About', route: '/about' },
          { title: 'Blog', route: '/blog' },
          // title: <span className='material-symbols-outlined'>shopping_cart</span>,
        ]}
      />
      <main className='main page'>
        {navigation.state === 'loading' ? (
          <Loading />
        ) : (
          <Outlet context={{ articles, setArticles }} />
        )}
      </main>
      <Footer />
    </>
  )
}
