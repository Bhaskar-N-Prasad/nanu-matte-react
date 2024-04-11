import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github from './components/Github/Github'
import Home from './components/Home/Home'
import User from './components/User/User'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home />
//     },{
//       path: "about",
//       element: <About />,
//       children:[{
//         path: "me",
//         element: <Home />
//       }]
//     },{
//       path: "/contact-us",
//       element: <Contact />
//     },
//     {
//       path: "/user/:id",
//       element: <User />
//     },
//     {
//       path: "/github",
//       element:<Github />

//     }
//   ]
//   },

// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} >
        <Route path='me' element={<Home />} />
      </Route>
      <Route path='contact-us' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route 
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
