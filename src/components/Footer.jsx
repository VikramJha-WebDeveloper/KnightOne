import React, {useContext} from "react";
import styled from "styled-components";

// import react icons
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook,  FaInstagramSquare, FaSkype, FaLinkedin} from "react-icons/fa";
import { themeContext } from "../App";

const Footer = () => {
    const theme = useContext(themeContext);
    const FooterSection = styled.div`
      .box{
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
    `
    return(<FooterSection className="bg-dark text-light">
      <div className="container py-5">
        <div className="row">
            <div className="col col-12 text-center">
                <h1>KnightOne</h1>
                <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
                <div className="socialMedias d-flex align-items-center justify-content-center">
                  <div className="bg-success mx-1 box">
                    <a href="#" className="d-flex align-items-center justify-content-center"><FaXTwitter className="fs-5 text-light"/></a>
                  </div>
                  <div className="bg-success mx-1 box">
                    <a href="#" className="d-flex align-items-center justify-content-center"><FaFacebook className="fs-5 text-light"/></a>
                  </div>
                  <div className="bg-success mx-1 box">
                    <a href="#" className="d-flex align-items-center justify-content-center"><FaInstagramSquare className="fs-5 text-light"/></a>
                  </div>
                  <div className="bg-success mx-1 box">
                    <a href="#" className="d-flex align-items-center justify-content-center"><FaSkype className="fs-5 text-light"/></a>
                  </div>
                  <div className="bg-success mx-1 box">
                    <a href="#" className="d-flex align-items-center justify-content-center"><FaLinkedin className="fs-5 text-light"/></a>
                  </div>
                </div>
            </div>
            <hr className="my-4"/>
            <div className="col col-12">
                <h3 className="text-center fs-6">Copyright <strong>KnightOne</strong> All Rights Reserved</h3>
                <p className="text-center">Designed by <a href="https://bootstrapmade.com/demo/templates/KnightOne/" style={{color: `${theme.themeColor}`, textDecoration: "none"}}><span>BootstrapMade</span></a></p>
            </div>
        </div>
      </div>
    </FooterSection>);
};

export default Footer;