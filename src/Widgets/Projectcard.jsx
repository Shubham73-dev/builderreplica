import React from 'react'

const Projectcard = ({projectSrc}) => {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src={projectSrc} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">Project title</h5>
                <p class="card-text">Some quick example text to build on the Project title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Visit Site</a>
            </div>
        </div>
    )
}

export default Projectcard