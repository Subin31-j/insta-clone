// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Profile from './Profile.jsx'

const router = createBrowserRouter(
    [
      {
        path : '/',
        element : <App/>
      },
      {
        path : '/profile',
        element : <Profile/>
      },
      {
          basename: '/insta-clone'
      }        
    ]
  )


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)


// npx json-server --watch db.json --port 3001
