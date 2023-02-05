import React from 'react'
import '../Styles/AboutCard.css'

const AboutCard = ({ aboutImg, aboutTitle = 'card title', aboutDesignation = 'lorem ipsum' }) => {
    return (
        <>
            <div class="card" style={{ width: '18rem' }} >
                <div className="aboutCardContainer center_align">
                    <img src={aboutImg} class="aboutCardImg card-img-top" alt="" />
                </div>
                <div class="card-body">
                    <h5 class="centerText card-title"> {aboutTitle}</h5>
                    <p class="centerText card-text">{aboutDesignation}</p>
                </div>
            </div>           
        </>
    )
}

export default AboutCard