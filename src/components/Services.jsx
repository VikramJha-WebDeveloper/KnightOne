import React, {useContext} from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";

// import react icons
import { BsActivity, BsBroadcast, BsBoundingBoxCircles, BsChatSquareText } from "react-icons/bs";
import { IoEaselOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { themeContext } from "../App";


// page name and description
const title = "Services";
const description = "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

const data = [
    {
        icon: <BsActivity />,
        heading: "Nesciunt",
        para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta explicabo ducimus eum ab nulla, voluptatem minima ea? Natus, reiciendis expedita.",
        aosDelay: 100,
    },
    {
        icon: <BsBroadcast />,
        heading: "Eosle Commodi",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vel officia ipsum delectus rem quasi ullam praesentium, blanditiis quam, quae nam nesciunt!",
        aosDelay: 200,
    },
    {
         icon: <IoEaselOutline />,
         heading: "Ledo Markt",
         para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eveniet minima? Distinctio animi odio quos ratione eos. Temporibus, id vero!",
         aosDelay: 300,
    },
    {
         icon : <BsBoundingBoxCircles />,
         heading: "Asperiores Commodit",
         para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime est sit hic beatae repellat reiciendis ad delectus!",
         aosDelay: 100,
    }, 
    {
         icon: <FaRegCalendar />,
         heading: "Velit Doloremque",
         para: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos deleniti, nobis sint ducimus rem nihil. Expedita soluta possimus ea tenetur.",
         aosDelay: 200,
    },
    {
        icon : <BsChatSquareText />,
        heading: "Dolori Architecto",
        para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo provident numquam aut ex consequatur non eveniet officiis?",
        aosDelay: 300,
    }
]

const Services = () => {
    const theme = useContext(themeContext);

    const ServiceSection = styled.div`
      .card{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        position: relative;
        top: 0;
        left: 0;
        transition-duration: .3s;
        cursor: pointer;
        &:hover{
          top: -10px;
        }
      }
      .icon-box{
        background-color: ${theme.themeColor};
        display: inline-block;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        svg{
          color: white !important;
        }
      }
    `
    return(<ServiceSection id="services">
      <div className="container py-5">
        <div className="row">
            <div className="col col-12">
                <SectionTitle title={title} description={description}></SectionTitle>
            </div>
        </div>
        <div className="row g-4 mt-3">
            {data.map((item, id)=>(
                <div key={id} className="col col-12 col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay={item.aosDelay}>
                <div className="card h-100 border-0">
                    <div className="card-body py-5">
                      <div className="fs-1 icon-box p-3">{item.icon}</div>
                      <h3 className="card-title my-2">{item.heading}</h3>
                      <p className="card-text">{item.para}</p>
                    </div>
                </div>
                
            </div>
            ))}
            
        </div>
      </div>
    </ServiceSection>);
};

export default Services;