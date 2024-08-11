import React, {useContext, useEffect} from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import { themeContext } from "../App";
import AOS from "aos";

// import react icons
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    })
    const theme = useContext(themeContext);
    const title="Contact";
    const description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

    const ContactSection = styled.div`
      background-color: ${theme.lightBgColor};
      svg{
        color: ${theme.themeColor};
      }
      button{
        background-color: ${theme.themeColor};    
      }
    `
    
    return(<ContactSection id="contact">
      <div className="container py-5">
        <div className="row">
            <div className="col col-12">
                <SectionTitle title={title} description={description}></SectionTitle>
            </div>
        </div>
        <div className="row mt-5" data-aos="fade-up">
            <div className="col col-12 col-lg-4">
                <div className="d-flex align-items-center mb-3">
                    <div>
                        <FaLocationDot className="fs-3"/>
                    </div>
                    <div className="ms-3">
                        <h3 className="fs-5">Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div>
                        <IoCall className="fs-3"/>
                    </div>
                    <div className="ms-3">
                        <h3 className="fs-5">Call Us</h3>
                        <p>+1 5589 55488 55</p>
                    </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                    <div>
                        <FaEnvelope className="fs-3"/>
                    </div>
                    <div className="ms-3">
                        <h3 className="fs-5">Email Us</h3>
                        <p>info@example.com</p>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-lg-8">
                <form>
                    <div className="row g-3">
                        <div className="col col-12 col-md-6">
                            <input type="text" className="form-control" placeholder="Your Name"></input>
                        </div>
                        <div className="col col-12 col-md-6">
                            <input type="email" className="form-control" placeholder="Your Email"></input>
                        </div>
                        <div className="col col-12">
                            <input type="text" className="form-control" placeholder="Subject"/>
                        </div>
                        <div className="col col-12">

                            <textarea className="form-control" placeholder="Message" rows="6"></textarea>
                        </div>
                        <div className="col col-12 text-center">
                            <button type="submit" className="btn text-light rounded-pill px-5">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </ContactSection>);
};

export default Contact;