import React, {useEffect} from "react";
import CountUp from "react-countup";
import styled from "styled-components";
import AOS from "aos";

// import images
import BgImage from "../../public/images/statsBg.jpg";

const data = [
    {
        start: 0,
        end: 232,
        name: "Clients",
        aosDelay: 100,
    },
    {
        start: 0,
        end: 521,
        name: "Projects",
        aosDelay: 200,
    },
    {
        start: 0,
        end: 1453,
        name: "Hours of Support",
        aosDelay: 300,
    },
    {
        start: 0,
        end: 32,
        name: "Workers",
        aosDelay: 400,
    }
]

const Stats = () =>{
    useEffect(()=>{
        AOS.init({
            duration: 1000,
        })
    })

    const StatsSection = styled.div`
      background-image: url(${BgImage});
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      color: white;
      h6{
        color: #b0afae;
      }
    `;

    return(<StatsSection className="py-5">
      <div className="container py-5">
        <div className="row">
            <div className="col col-12" data-aos="fade-up">
                <h2 className="text-center m-0">What we have achieved so far</h2>
                <p className="text-center mt-3">Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
            </div>
            {data.map((item)=>(
                <div className="col col-12 col-lg-3 col-md-6 mt-5" data-aos="fade-up" data-aos-delay={item.aosDelay}>
                    <h3 className="text-center fs-1">
                        <CountUp Start={item.start} end={item.end} duration={2.75}></CountUp>
                    </h3>
                    <h6 className="text-center">{item.name}</h6>
                </div>
            ))}
        </div>
      </div>
    </StatsSection>);
};

export default Stats;