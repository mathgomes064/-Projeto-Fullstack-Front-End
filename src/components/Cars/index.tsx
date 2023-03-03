import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarSection } from "./style"
import car from "../../assets/carro.png"
import user from "../../assets/user.jpg"
import Slider from "react-slick"
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../providers/vehicle/vehicleContext";
import { IVehicle } from "../../interfaces";

export const Cars = () =>{
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

    const routeChange = (id) =>{ 
      let path = `product/`+ id; 
      history.push(path);
    }

    const {getCars, cars}:any = useContext(AuthContext)

    useEffect(() => getCars(), [])


    return(
        <CarSection>
            <div className="tittleDiv">
                <h1>Carros</h1>
            </div>
            <Slider {...settings}>
                {cars?.map((car: any, index: any) => (
                            <div key={index} className="card" onClick={() => {routeChange(car.id)}}>
                                <div className="imgDiv">
                                    <img src={car.urlImage} alt="" />
                                </div>
                                <div className="divOne">
                                    <h1>{car.title}</h1>
                                    <p>{car.description}</p>
                                </div>
                                <div className="divTwo">
                                    <div>
                                        <img src={user} alt="" />
                                        <p>Samuel Leão</p>
                                    </div>
                                </div>
                                <div className="divTree">
                                    <div>
                                        <div>
                                            <span>{car.mileage}</span>
                                            <span>{car.year}</span>
                                        </div>
                                        <p>R${car.price}</p>
                                    </div>
                                </div>
                            </div>)
                    )}
            </Slider>
        </CarSection>
    )
}