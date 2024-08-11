import React, {useContext} from "react";
import SectionTitle from "./SectionTitle";
import { themeContext } from "../App";


// page Name and description
const title = "About";
const description = "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit";

const About = () =>{
    const theme = useContext(themeContext);
    return(<div id="about">
    <div className="container py-5">
        <div className="row">
            <div className="col col-12">
                <SectionTitle title={title} description={description}></SectionTitle>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col col-12 col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul className="list-group border-0">
                    <li className="list-group-item border-0">Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li className="list-group-item border-0">Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li className="list-group-item border-0">Ullamco laboris nisi ut aliquip ex ea commodo</li>
                </ul>
            </div>
            <div className="col col-12 col-lg-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="btn text-light" style={{backgroundColor: `${theme.themeColor}`}}>Read More</button>
            </div>
        </div>
    </div>
      
    </div>);
};

export default About; 