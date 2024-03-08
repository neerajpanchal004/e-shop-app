import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Contextapi from './context/Contextapi'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
// import CardSlider from './components/CardSlider'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const page = () => {
  return (
    <>
    <Header />
    {/* <CardSlider/> */}
    <Home/>
    <Footer />
    
    </>
    
  )
}

export default page