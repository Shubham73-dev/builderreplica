import React from 'react'
import constructImg from'../../Assets/images/construction.png'
import '../../Styles/sectioncompleted.css'


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
                        <img src={constructImg} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={constructImg} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={constructImg} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={constructImg} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={constructImg} class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visit Site</a>
                        </div>
                    </div>
                    <div class="card" style={{width:'18rem'}}>
                        <img src={constructImg} class="card-img-top" alt="" />
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