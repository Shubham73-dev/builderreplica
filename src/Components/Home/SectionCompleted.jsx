import React from 'react'
import constructImg from'../../Assets/images/construction.png'
import '../../Styles/sectioncompleted.css'
import card_1 from '../../Assets/images/Completed-projects/card_1.jpg'
import card_2 from '../../Assets/images/Completed-projects/card_2.jpg'
import card_3 from '../../Assets/images/Completed-projects/card_3.jpg'
import card_4 from '../../Assets/images/Completed-projects/card_4.jpg'
import card_5 from '../../Assets/images/Completed-projects/card_5.jpeg'
import card_6 from '../../Assets/images/Completed-projects/card_6.jpg'
import card_7 from '../../Assets/images/Completed-projects/card_7.jpg'


const SectionCompleted = () => {
    return (
        <section className='SectionCompleted'>
            <div className="SectionCompleted_wrapper">
                <h1 className='bottomDivider' style={{textAlign:'center',marginBottom:'2rem'}}>Completed Projects</h1>
                <div className="row cardsContainer">
                    <div class="card" style={{width:'18rem'}}>
                        <img src={constructImg} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_1} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_2} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_3} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_4} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_5} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_6} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={card_7} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionCompleted