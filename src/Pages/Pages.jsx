import React from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Widgets/Carousel'
import SectionIntro from '../Components/Home/SectionIntro'
import SectionCompleted from '../Components/Home/SectionCompleted'
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
    </div>
  )
}

export default Pages