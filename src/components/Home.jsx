import React, { useContext, useEffect } from "react";
import styled from 'styled-components';
import { themeContext } from "../App";
import AOS from "aos";

// import images
import bgImage from "../../public/images/homeBg.jpg";

// import icons
import { FaPlay } from "react-icons/fa";



const Home = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        })
    })
    const theme = useContext(themeContext);
    const HomeSection = styled.div`
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${bgImage});
      height: 100vh;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      button{
        width: 75px;
        height: 75px;
        background-color: ${theme.themeColor};
        border-width: 0px;
        transition-duration: .3s;
        &:hover{
          background-color: ${theme.themeColorHover};
        }
      }
    `;
    return(
        <HomeSection>
          <h1 className="text-light display-4 fw-bolder text-center" data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h1>
          <p className="text-light fs-3 mt-1 text-center" data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
          <button className="rounded rounded-circle p-0 m-0" data-aos="fade-up" data-aos-delay="300">
            <FaPlay className="text-light"></FaPlay>
          </button>
        </HomeSection>
    );
};

export default Home;