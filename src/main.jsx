import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import App from './App'
import Root from './routes/root'
import Index from './routes'
import About from './routes/about'
import Projects from './routes/projects'
import Skills from './routes/skills'
import Contact from './routes/contact'
import './index.css'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
