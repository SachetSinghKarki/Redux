import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Leftbar from './components/Leftbar/Leftbar'
import Update from './components/Update/Update' 
import './App.css'
import Rightbar from './components/Rightbar/Rightbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Leftbar/>
      <Update/>
      <Rightbar/>
    </div>
    </>
  )
}

export default App