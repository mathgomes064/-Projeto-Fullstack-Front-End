import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MotorcycleSection } from "./style"
import moto from "../../assets/moto.png"
import user from "../../assets/user.jpg"
import Slider from "react-slick"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/vehicle/vehicleContext";
import { useHistory } from "react-router-dom";
import { ModalEditAdButton } from "../ModalEditAd/ModalEditAd";

export const SellerMotorcycles = ({motos}) =>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const history = useHistory();

    const routeChange = (id: string) =>{ 
      let path = `product/`+ id; 
      history.push(path);
    }

    return(
        <MotorcycleSection>
            <div className="tittleDiv">
                <h1>Motos</h1>
            </div>
              { (motos.length > 0) ?
              <Slider {...settings}>
                      {motos?.map((motorcycle: any, index: any) =>(
                          <div key={index} className="card">
                              <div className="imgDiv"  onClick={() => {routeChange(motorcycle.id)}}>
                                  <img src={motorcycle.urlImage} alt="" />
                              </div>
                              <div className="divOne">
                                  <h1>{motorcycle.title}</h1>
                                  <p>{motorcycle.description}</p>
                              </div>
                              <div className="divTwo">
                                  <div>
                                      <img src={user} alt="" />
                                      <p>{motorcycle.owner}</p>
                                  </div>
                              </div>
                              <div className="divTree">
                                  <div>
                                      <div>
                                          <span>{motorcycle.mileage}Km</span>
                                          <span>{motorcycle.year}</span>
                                      </div>
                                      <p>R${motorcycle.price},00</p>
                                  </div>
                              </div>
                          </div>
                      )
                  )}
              </Slider>
              : <>Nenhuma moto</>
              }
        </MotorcycleSection>
    )
}
