import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Widgets/Carousel'
import SectionIntro from '../Components/Home/SectionIntro'
import SectionCompleted from '../Components/Home/SectionCompleted'
import Footer from '../Components/Footer'
import '../Styles/sections_wrapper.css'


const Pages = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="sections_wrapper">
        <SectionIntro />
        <SectionCompleted />
      </div>
      <Footer />
    </div>
  )
}

export default Pages