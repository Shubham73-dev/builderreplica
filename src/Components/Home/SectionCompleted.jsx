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
import Projectcard from '../../Widgets/Projectcard'


const SectionCompleted = () => {
    return (
        <section className='SectionCompleted'>
            <div className="SectionCompleted_wrapper">
                <h1 className='bottomDivider' style={{textAlign:'center',marginBottom:'2rem'}}>Completed Projects</h1>
                <div className="row cardsContainer">
                    <Projectcard projectSrc = {constructImg}/>
                    <Projectcard projectSrc = {card_1}/>
                    <Projectcard projectSrc = {card_2}/>
                    <Projectcard projectSrc = {card_3}/>
                    <Projectcard projectSrc = {card_4}/>
                    <Projectcard projectSrc = {card_5}/>                 
                    <Projectcard projectSrc = {card_6}/>                 
                    <Projectcard projectSrc = {card_7}/>                 
                </div>
            </div>
        </section>
    )
}

export default SectionCompleted