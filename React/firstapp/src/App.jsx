import React from 'react'
import "./App.css"
import Navbar from './Pages/Navbar'
import Footer from './Pages/Footer'
import Button from './Pages/Button'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <div className="container">

    <Navbar/>
      <h1>Namaste Bharat</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium quia obcaecati accusantium saepe facere! Ratione, ipsa voluptates! Optio enim non doloremque officiis, veniam quibusdam iure officia vel quia temporibus.</p>
      <Button/>
      <Home/>
      <Footer/>
      
    </div>
      </>
  )
}

export default App
