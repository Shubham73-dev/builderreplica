import React from 'react'
import '../../Styles/About.css'
import Footer from '../Footer'
import ceo from '../../Assets/images/about/CEO_img.jpg'
import AboutCard from '../../Widgets/AboutCard'
import about_1 from '../../Assets/images/about/about_1.jpg'
import about_2 from '../../Assets/images/about/about_2.jpg'
import about_3 from '../../Assets/images/about/about_3.jpg'
import about_4 from '../../Assets/images/about/about_4.jpg'
import about_5 from '../../Assets/images/about/about_5.jpg'
import about_6 from '../../Assets/images/about/about_6.jpg'


const About = () => {
  return (
    <>
      <section className='first_Section'>
        <div className="fisrtSection_wrapper">
          <div className="fisrtSection">
            <h1>About Us</h1>
          </div>
        </div>
      </section>
      <div className="sections_wrapper">
        <section className="sectionCEO">
          <div className="row">
            <div className="imageSection sectionDivision">
              <img className='img' src={ceo} alt="CEO" />
            </div>
            <div className="CEO_detail sectionDivision">
              <h1>Mr. Tony Stark</h1>
              <h2><span>CEO</span>, B.TECH</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo hic nemo iusto natus? Nobis impedit quisquam voluptatum quo mollitia voluptatem reprehenderit omnis nemo voluptates! Odit deleniti sint harum nostrum repudiandae.
                Sit explicabo, eius natus praesentium labore dolorem mollitia totam nisi delectus voluptates quod, dolorum est inventore minima placeat corporis molestiae cumque atque debitis ullam? Deserunt ratione cum iste voluptates dicta?
                Velit illo est, libero voluptate nemo laborum magni maiores laboriosam ea, exercitationem numquam amet tempora cumque et unde. Voluptas minima obcaecati exercitationem similique ipsa eum vitae nobis porro tenetur et.</p>
            </div>
          </div>
        </section>
        <section className="partnersDetails">
          <div className="row colGap rowGap">
            <AboutCard aboutImg={about_1} aboutTitle="Mr. Chris Hemsworth" aboutDesignation="Managing Partner, B tech" />
            <AboutCard aboutImg={about_2} aboutTitle="Mr. Chris Evan" aboutDesignation="DGM – Sales & Marketing, (MBA)"/>
            <AboutCard aboutImg={about_3} aboutTitle="Mr. Gerrard Butler" aboutDesignation="Sales - Head, (B.COM)" />
            <AboutCard aboutImg={about_4} aboutTitle="Mr.Hugh Jackman" aboutDesignation="Site Engineer , BE in Civil Engineering" />
            <AboutCard aboutImg={about_5} aboutTitle="Mr. Ryan Reynolds" aboutDesignation="Site Supervisor, B Com" />
            <AboutCard aboutImg={about_6} aboutTitle="Mrs. Scarlett Johanson" aboutDesignation="Architect, ME Structural Engineer" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About