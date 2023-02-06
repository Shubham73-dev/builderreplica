import React from 'react'
import '../Styles/Contact.css'
import Floatinglabels from '../Widgets/Floatinglabels'
import Footer from '../Components/Footer'


const Contact = () => {
    return (
        <>
            <section className='first_Section'>
                <div className="fisrtSection_wrapper">
                    <div className="firstSection">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="sections_wrapper">
                        <div className="row rowGap">
                            <div className="formContainer col-md-6">
                                <Floatinglabels types="text" labels="Enter Your Name" />
                                <Floatinglabels types="email" labels="Enter Your Email" />
                                <Floatinglabels types="text" labels="Subject" />
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" style={{ height: "100px" }}></textarea>
                                    <label for="floatingTextarea2">Message</label>
                                </div>
                                <button className='btn btn-primary'>CONTACT US</button>
                            </div>
                            <div className="contactInfo col-md-6">
                                <h1>Contact Info</h1>
                                <div className="contactDetails row bottomMargin">
                                    {/* email section */}
                                    <div className="colSection col-md-6">
                                        <div className="iconContain center_align">
                                            <i class="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="mailSection">
                                            <h5>Our Email</h5>
                                            <span>enquiry@ourstructures.com</span> <br />
                                            <span>company@ourstructures.com</span>
                                        </div>
                                    </div>
                                    {/* telephonic section */}
                                    <div className="colSection col-md-6">
                                        <div className="iconContain center_align">
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className="mailSection">
                                            <h5>Call Us</h5>
                                            <span>+91-99876543210</span> <br />
                                            <span>+91-0123456789</span>
                                        </div>
                                    </div>
                                    <div className="colSection"></div>
                                </div>
                                {/* address site section */}
                                <div className="addressSection bottomMargin">
                                    <div className="colSection col-md-12">
                                        <div className="iconContain center_align">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="mailSection">
                                            <h5>Site Address</h5>
                                            <p>Serve.no.159, manchanahahalli,village,Attibele hobli, Taluk, Anekal, Karnataka, India</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="addressSection bottomMargin">
                                    <div className="colSection col-md-12">
                                        <div className="iconContain center_align">
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="mailSection">
                                            <h5>Official Address</h5>
                                            <p>115, 2nd floor,Sankirana, Hosur Rd, near muruli TVs, Chandapura, Bengaluru, Karnataka 560099, India</p>
                                        </div>
                                    </div>
                                </div>
                                {/* card footer starts from here */}
                                <div className="cardFooterContainer bottomMargin">
                                    <h3>Follow Us</h3>
                                    <div className="socialIconsContainer">
                                        <div className="iconContain center_align">
                                        <i class="fa-brands fa-facebook"></i>
                                        </div>
                                        <div className="iconContain center_align">
                                        <i class="fa-brands fa-twitter"></i>
                                        </div>
                                        <div className="iconContain center_align">
                                        <i class="fa-brands fa-google-plus-g"></i>
                                        </div>
                                        <div className="iconContain center_align">
                                        <i class="fa-brands fa-linkedin"></i>
                                        </div>
                                        <div className="iconContain center_align"><i class="fa-brands fa-instagram"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact