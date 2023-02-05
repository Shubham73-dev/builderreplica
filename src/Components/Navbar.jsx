import React from 'react'
import image from '../Assets/images/logo.jpg';
import Tabs from '../Widgets/Tabs';
import '../Styles/navbar.css'
import { Outlet,NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div class="container-fluid">
                    <div class="navbar-brand"><img src={image} alt="" /></div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <NavLink to="/builderreplica"><Tabs tabTitle="Home" /></NavLink>
                            <NavLink to="/builderreplica/about"><Tabs tabTitle="About Us" /></NavLink>
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
                            <Tabs tabTitle={<a href="https://www.facebook.com/"><i class="socialProfileIcons fa-brands fa-facebook"></i></a>} />
                            <Tabs tabTitle={<a href="https://twitter.com/"><i class="socialProfileIcons fa-brands fa-twitter"></i></a>} />
                            <Tabs tabTitle={<a href="https://www.instagram.com/"><i class="socialProfileIcons fa-brands fa-instagram"></i></a>} />
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>

    )
}

export default Navbar