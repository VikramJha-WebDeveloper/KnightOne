import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const SectionTitle = ({title, description}) => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    })
    const TitleSection = styled.div`
      h1::after{
        content: "";
        height: 5px;
        width: 50px;
        display: block;
        background-color: red;
        margin: 20px 0px;
      }
    `
    return(<TitleSection data-aos="fade-up">
      <h1>{title}</h1>
      <p className="text-secondary">{description}</p>

    </TitleSection>);
};

export default SectionTitle;