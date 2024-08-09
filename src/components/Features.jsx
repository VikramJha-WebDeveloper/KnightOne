import React, {useContext, useEffect} from "react";
import AOS from "aos";

// import react icons
import { FiArchive } from "react-icons/fi";
import { BsBroadcast, BsCameraReels,  BsBasket} from "react-icons/bs";
import { themeContext } from "../App";

// import images
import image from "../../public/images/featuresImg.jpg";

const data = [
    {
        icon: <FiArchive />,
        heading: "Est labore ad",
        para: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
        aosDelay: 100
    },
    {
        icon : <BsBasket />,
        heading: "Harum esse qui",
        para: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
        aosDelay: 200
    },
    {
        icon: <BsBroadcast />,
        heading: "Aut occaecati",
        para: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
        aosDelay: 300
    },
    {
        icon: <BsCameraReels />,
        heading: "Beatae veritatis",
        para: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
        aosDelay: 400
    }
]


const Features = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  });
    const theme = useContext(themeContext);

    return(<>
      <div className="container py-5">
        <div className="row">
            <div className="col col-12 col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <ul className="list-group ">
                    {data.map((item, index)=>(
                        <li key={index} className="list-group-item mt-3 border-0" data-aos="fade-up" data-aos-delay={`${data.aosDelay}`}>
                      <div className="d-flex align-items-center justify-content-start">
                        <div className="fs-1" style={{color: `${theme.themeColor}`}}>
                          {item.icon}
                        </div>
                        <div className="ms-4">
                          <h4 className="m-0">{item.heading}</h4>
                          <p className="m-0 text-secondary">{item.para}</p>
                        </div>
                      </div>
                    </li>
                    ))}
                </ul>

            </div>
            <div className="col col-12 col-lg-6 d-flex align-items-center justify-content-center order-1 order-lg-2">
                <img src={image} className="img-fluid" data-aos="zoom-in"/>
            </div>
        </div>
      </div>
    </>);
};

export default Features;