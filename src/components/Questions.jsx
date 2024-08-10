import React, {useContext, useEffect} from "react";
import { themeContext } from "../App";
import styled from "styled-components";
import AOS from "aos";

// import images
import QuestionMark from "../../public/images/questionMark.jpg";

const Questions = () => {
    useEffect(()=>{
        AOS.init({
            duration: 1000
        })
    })
    const theme = useContext(themeContext);

    const QuestionSection = styled.div`
    .accordion .accordion-item{
       margin: 20px 0px;
       border: 0;
    }
      button{
        background-color: white !important;
        border-radius: 0 !important;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    `
    return(<QuestionSection>
       <div className="container py-5">
        <div className="row">
            <div className="col col-12 col-lg-6 order-2 order-lg-1" data-aos="fade-up">
                <h2>Frequently Asked <strong>Questions</strong></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                <div className="accordion" id="accordionQuestion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-target="#collapseOne" data-bs-toggle="collapse">
                            Non consectetur a erat nam at lectus urna duis?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseOne" data-bs-parent="#accordionQuestion">
                            <div className="accordion-body">
                                <p>
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-target="#collapseTwo" data-bs-toggle="collapse">
                            Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseTwo" data-bs-parent="#accordionQuestion">
                            <div className="accordion-body">
                                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" data-bs-target="#collapseThree" data-bs-toggle="collapse">
                            Dolor sit amet consectetur adipiscing elit pellentesque?
                            </button>
                        </h2>
                        <div className="accordion-collapse collapse" id="collapseThree" data-bs-parent="#accordionQuestion">
                            <div className="accordion-body">
                                <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col col-12 col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
                <img src={QuestionMark} className="img-fluid"/>
            </div>
        </div>
       </div>
    </QuestionSection>);
};

export default Questions;