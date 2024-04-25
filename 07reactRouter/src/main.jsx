import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from "./components/About/About.jsx";
import Layout from './Layout.jsx'
import Home from "./components/Home/Home";
import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub, { gitHubInfoLoader } from './components/GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <ContactUs />
//       },

//     ]

//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    < Route path='/' element={< Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='user/:userId' element={<User />} />
      <Route loader={gitHubInfoLoader} path='gitHub' element={<GitHub />} />
    </ Route>
  )

) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
