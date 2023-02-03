import React from 'react'
import '../../Styles/sectionparallax.css'

const SectionParallax = () => {
  return (
    <section>
        <div className="parallax_wrapper">
            <h1 className="experienceHeading">VISIT OUR EXPERIENCE CENTER</h1>
            <p className="experiencePara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsum asperiores accusantium cumque vel voluptas corrupti dolor ad molestias ab. Voluptatibus reprehenderit incidunt, doloribus provident quo quod quia sapiente voluptatem.</p>
            <div className="callusBtn"><button className='btn btn-primary'><a className='center_align' href="tel:+917814587230" onclick="window.location = 'tel:+917814587230';">CALL US <i class="fa-solid fa-arrow-right"></i></a></button></div>
        </div>
    </section>
  )
}

export default SectionParallax