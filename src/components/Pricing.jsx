import React, {useContext, useEffect} from "react";
import SectionTitle from "./SectionTitle";
import { themeContext } from "../App";
import styled from "styled-components";
import AOS from "aos";

const title = "Pricing";
const description = "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

const Pricing = () =>{
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    })
    const theme = useContext(themeContext);
    const data = [
        {
            name: "Free",
            doller: 0,
            plans:["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "<del>Pharetra massa</del>", "<del>Massa ultricies mi</del>"],
            buttonStyle: {
                bgColor: null,
                text: "dark",
            }
        },
        {
            name: "Business",
            doller: 19,
            plans:["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "Pharetra massa", "<del>Massa ultricies mi</del>"],
            buttonStyle: {
                bgColor: `${theme.themeColor}`,
                text: "light",
            }
        },
        {
            name: "Developer",
            doller: 29,
            plans:["Aida dere", "Nec feugiat nisl", "Nulla at volutpat dola", "Pharetra massa", "Massa ultricies mi"],
            buttonStyle: {
                bgColor: null,
                text: "dark",
            }
        },
    ]
    const PriceSection = styled.div`
    background-color: ${theme.lightBgColor};
      button{
        border: 2px solid ${theme.themeColor} !important;
      }
      .card{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;    
      }
      h4{
        color: ${theme.themeColor};
      }
    `
    return(<PriceSection id="pricing">
      <div className="container py-5">
        <div className="row">
            <div className="col col-12">
                <SectionTitle title={title} description={description}></SectionTitle>
            </div>
        </div>
        <div className="row mt-3 g-4">
            {data.map((item)=>(
                <div className="col col-12 col-lg-4 col-md-6" data-aos="flip-left">
                    <div className="card border-0 py-4">
                        <div className="card-body text-center">
                            <h3>{item.name}</h3>
                            <h4 className="mt-3 mb-4 fs-1"><sup className="fs-4">$</sup>{item.doller}<sub className="fs-5 text-secondary fw-normal">/month</sub></h4>
                            {item.plans.map((pNames)=>(
                                <p dangerouslySetInnerHTML={{__html: pNames}} className="text-center"></p>
                            ))}
                        
                            <button className={`btn text-${item.buttonStyle.text} border border-2 mt-5 rounded-pill px-5`} style={{backgroundColor: `${item.buttonStyle.bgColor}`}}>Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </PriceSection>);
};

export default Pricing;