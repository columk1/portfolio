import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './ErrorPage.jsx'
import Home from './routes/home/home.jsx'
import Projects from './components/Projects/Projects.jsx'
import Blog from './routes/blog.jsx'
import Posts from './components/Posts/Posts.jsx'
import Post from './components/Post/Post.jsx'
import About from './routes/about/About.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          { index: true, element: <Posts /> },
          { path: ':postSlug', element: <Post /> },
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
