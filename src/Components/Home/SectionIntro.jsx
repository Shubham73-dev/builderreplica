import React from 'react'
import home from '../../Resources/Home.json'
import imagesky from '../../Assets/images/skyscraper.png';
import '../../Styles/sectionintro.css'


const SectionIntro = () => {
    return (
        <section className='intro'>
            <div className="introContainer">
                <div className="textsSection w_50">
                    <div className="upperSec">
                        <h1>{home.topHeading}</h1>
                        <h3>{home.secondHeading}</h3>
                        <p>{home.introPara}</p>
                    </div>
                    <div className="telephonicSec">
                        <div className='fl'>
                            <span><i class="fa-solid fa-phone"></i></span><span>Call Us Today</span>
                        </div>
                        <h1>{home['tel-1']}</h1>
                        <h1>{home['tel-2']}</h1>
                    </div>
                </div>
                <div className="imageSection w_50">
                    <img src={imagesky} alt="" />
                </div>
            </div>
        </section>
    )
}

export default SectionIntro