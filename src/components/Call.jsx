import React, {useContext, useEffect} from "react";
import { themeContext } from "../App";
import styled from "styled-components";
import AOS from "aos";

// import images
import bgImage from "../../public/images/callBg.jpg";

const Call = ()=>{
    useEffect(()=>{
        AOS.init({
            duration: 1000
        });
    });
    const theme = useContext(themeContext);

    const CallSection = styled.div`
      background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bgImage});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;

    `
    return(
        <CallSection className="py-5">
        <div className="container py-5" data-aos="zoom-in">
            <div className="row">
                <div className="text-light col col-12 col-xl-10 d-flex flex-column justify-content-center align-items-center align-items-xl-start">
                    <h3 className="m-0 fw-bolder pb-3">Call To Action</h3>
                    <p className="m-0 text-center text-xl-start">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col col-12 col-xl-2 d-flex flex-column justify-content-center align-items-center align-items-xl-start">
                    <button className="btn text-light" style={{backgroundColor: `${theme.themeColor}`}}>Call To Action</button>
                </div>
            </div>
        </div>
        </CallSection>
    );
};

export default Call;