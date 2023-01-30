import React from 'react'
import '../Styles/Clientcard.css'

const Clientcard = ({sourceOfImage,clientName,clientDesignation}) => {
    const imgSrc = `${sourceOfImage}`;
    return (
        <>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4 cardImgContainer">
                        <img src={imgSrc} class="img-fluid rounded-start cardImg" alt="..." />
                    </div>
                    <div class="col-md-8 center_align">
                        <div class="card-body colFlexProp rowGap">
                            <p class="card-text"> <i class="fa-solid fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed beatae, harum, voluptatem, labore laboriosam ratione nesciunt laudantium fugiat magni animi ab unde voluptates corrupti veniam ut deleniti. Voluptatibus, quibusdam suscipit! <i class="fa-solid fa-quote-right"></i></p>
                            <p class="card-text"><small class="text-muted">{clientName}<br />
{clientDesignation}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clientcard