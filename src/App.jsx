import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './ErrorPage.jsx'
import Home from './routes/home/home.jsx'
import Blog from './routes/blog.jsx'
import Articles from './components/Articles/Articles.jsx'
import Article from './components/Article/Article.jsx'
import About from './routes/about/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          { index: true, element: <Articles /> },
          { path: ':articleId', element: <Article /> },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
