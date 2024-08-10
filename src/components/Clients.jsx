import React, {useEffect} from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import Myob from "../../public/images/MYOB_Logo.png";
import Belimo from "../../public/images/Belimo.png";
import LifeGroups from "../../public/images/lefeGroups.png";
import Lilly from "../../public/images/lilly.png";
import Citrus from "../../public/images/citrus.png";
import Trustly from "../../public/images/trustly.png";
import Oldendorff from "../../public/images/oldendorff.png";
import Grabyo from "../../public/images/grabyo.png";

const data = [
  {
    image: Myob,
    aosDelay: 100,
  }, 
  {
    image: Belimo,
    aosDelay: 200,
  },
  {
    image: LifeGroups,
    aosDelay: 300,
  },
  {
    image: Lilly,
    aosDelay: 100,
  },
  {
    image: Citrus,
    aosDelay: 200,
  },
  {
    image:Trustly,
    aosDelay: 300,
  },
  {
    image: Oldendorff,
    aosDelay: 100,
  },
  {
    image: Grabyo,
    aosDelay: 200,
  }
];
console.log(data[0]);

const Clients = () => {
  useEffect(()=>{
    AOS.init({
      duration: 1000
    })
  })
  const ClientsSection = styled.div`
    .card img{
      transition-duration: .3s;
    }
    .card:hover img{
      transform: scale(1.2)
      }
    }

  `;
  return (
    <ClientsSection>
      <div className="container py-5">
        <div className="row">
          {data.map((item, index) => (
            <div key={index} className="col col-12 col-md-4 col-xl-3" data-aos="fade-up" data-aos-delay={`${item.aosDelay}`}>
              <div className="card border-0">
                <div className="card-body text-center">
                  <img src={item.image} className="w-50" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ClientsSection>
  );
};

export default Clients;
