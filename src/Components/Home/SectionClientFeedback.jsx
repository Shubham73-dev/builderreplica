import React from 'react'
import '../../Styles/SectionClientFeedback.css'
import home from '../../Resources/Home.json'
import Clientcard from '../../Widgets/Clientcard'
import client_1 from '../../Assets/images/ClientsImages/testimonial-image-1.jpg'
import client_2 from '../../Assets/images/ClientsImages/testimonials-2.jpg'
import client_3 from '../../Assets/images/ClientsImages/testimonial-image-3.jpg'

const SectionClientFeedback = () => {
    return (
        <section className='clientFeedback'>
            <div className="clientFeedback_wrapper">
                <div className="clientFeedbackContainer row">
                    <div className="colLeft col-md-6 colFlexProp rowGap autoImg">
                        <h1>What Our Client Says</h1>
                        <p className='clientPara'>{home.clientPara}</p>
                        <Clientcard sourceOfImage={client_1} clientName="Margaret Curtis​" clientDesignation="Real Estate Developer" />                     
                        
                    </div>
                    <div className="colRight col-md-6 autoImg">
                        <Clientcard  sourceOfImage={client_2} clientName="Matthew Fox​​" clientDesignation="Development Company"/>
                        <Clientcard  sourceOfImage={client_3} clientName="John Doe​" clientDesignation="Architect"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionClientFeedback