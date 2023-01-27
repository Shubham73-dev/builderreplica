import React from 'react'
import image from '../Assets/images/logo.jpg';
import '../Styles/carousel.css'


const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.thedirect.com/media/article_full/marvel-studios-movies-ranked-mcu_7nvYBvz.jpg" alt="marvel"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://www.getdroidtips.com/wp-content/uploads/2022/12/All-Upcoming-Marvel-Movies-and-Series-2023.webp" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://comic-cons.xyz/wp-content/uploads/marvel-celebrates-10-years.jpg" alt="" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel