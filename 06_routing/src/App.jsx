import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact_us from './component/Contact_us'
import User from './component/User'

function App() {
  
const router= createBrowserRouter(
  [
    {
      path:"/",
      element:<><Navbar /><Home/></>
    },
    {
      path:"/about",
      element:<><Navbar /><About/></>
    },
    {
      path:"/contact_us",
      element:<><Navbar /><Contact_us/></>
    },
    {
      path:"/user/:username",
      element:<><Navbar /><User/></>
    }
  ]
)
  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
