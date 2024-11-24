import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/user.jsx'
import Github ,{githubInfo} from './components/github/github.jsx'



const router =createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<App/>}>
  <Route path='' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route
  loader={githubInfo}
  path='github' element={<Github/>}/>
  <Route path='user/:id' element={<User/>}/>
  
  </Route>
 )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
