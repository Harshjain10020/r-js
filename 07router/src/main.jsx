import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import About from './components/about/About.jsx'
import Home from './components/home/home.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github from './components/github/Github.jsx'
import { githubInfoLoader } from './components/github/Github.jsx'




// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element= {<Home/>}></Route>
      <Route path='about' element= {<About/>}></Route>
      <Route path='contact' element= {<Contact/>}></Route>
      <Route path='user/:userid' element= {<User/>}></Route>
      {/* <Route path='github' element= {<Github/>}></Route> */}
      <Route
       loader = {githubInfoLoader}
       path = 'github'
       element = {<Github/>}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
