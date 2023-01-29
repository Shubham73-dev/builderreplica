import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer_wrapper fl-col">
                <div className="detailsSection">
                    <div className="row">
                        <div className="aboutContainer col-md-4 fl-col">
                            <h3>About Company Structures</h3>
                            <div className="description">
                                <p>
                                    The Chief Executive Officer and the managing director of Yuva Group, Mr Mahendra Reddy with his well-established career has started with the construction of apartments in different locations of Bengaluru.
                                </p>
                            </div>
                            <div className="socialProfiles">
                                <div className="iconsContainer center_align"><i class="fa-brands fa-facebook"></i></div>
                                <div className="iconsContainer center_align"><i class="fa-brands fa-twitter"></i></div>
                                <div className="iconsContainer center_align"><i class="fa-brands fa-google"></i></div>
                                <div className="iconsContainer center_align"><i class="fa-brands fa-linkedin"></i></div>
                            </div>
                        </div>
                        <div className="ourCompanyContainer col-md-4 fl-col">
                            <h3>Our Company</h3>
                            <div className="menus">
                                <ul className='topLists'>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Projects
                                        <ul style={{paddingLeft:'1rem'}}>
                                            <li><i class="fa-solid fa-caret-right"></i> <a href="">Ongoing</a></li>
                                            <li><i class="fa-solid fa-caret-right"></i> <a href="">Completed</a></li>
                                        </ul>
                                    </li>
                                    <li>Testimonials</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ContactContainer col-md-4 fl-col">
                            <h3>Contact Details</h3>
                            <ul className='topLists'>
                                <li><i class="fa-solid fa-location-pin"></i> Your Complete Address <br />
                                Pincode - 123456 <br />
                                Landmark- qwerty
                                </li>
                                <li><i class="fa-solid fa-phone"></i> +91-9876543210</li>
                                <li><i class="fa-solid fa-envelope"></i> enquiry@ourcompany.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyRightSection center_align">
                    <span>Copyright © 2023 Our Structures</span>
                    <a href="#" style={{display:'block'}} className='backToTop'>
                        <button  title='Back to top' className='backToTopBtn center_align'><i class="fa-solid fa-angle-up"></i></button>                       
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer