import React from 'react'
import SectionClientFeedback from '../Components/Home/SectionClientFeedback'
import Footer from '../Components/Footer'
import '../Styles/Testimonials.css'



const Testimonials = () => {
  return (
    <>
      <div className="testimonialContainer">
        <h1 className='centerText'>Client Testimonials</h1>
      <div className="sections_wrapper">
        <SectionClientFeedback />
      </div>
      </div>
      
      <Footer />
    </>
  )
}

export default Testimonials