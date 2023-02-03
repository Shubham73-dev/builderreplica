import React from 'react'
import image from '../Assets/images/logo.jpg';
import Tabs from '../Widgets/Tabs';
import '../Styles/navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <div class="navbar-brand"><img src={image} alt="" /></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <Tabs tabTitle="Home" isActive="active" />
                            <Tabs tabTitle="About Us" />
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Projects
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Ongoing Projects</a></li>
                                    <li><a class="dropdown-item" href="#">Completed Projects</a></li>
                                </ul>
                            </li>                           
                            <Tabs tabTitle="Testimonials" />                           
                            <Tabs tabTitle="Contact Us" />                           
                            <Tabs tabTitle={<i class="socialProfileIcons fa-brands fa-facebook"></i>} />
                            <Tabs tabTitle={<i class="socialProfileIcons fa-brands fa-twitter"></i>} />
                            <Tabs tabTitle={<i class="socialProfileIcons fa-brands fa-instagram"></i>} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar