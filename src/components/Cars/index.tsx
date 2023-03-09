import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CarSection } from "./style"
import userImg from "../../assets/user.jpg"
import Slider from "react-slick"
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../providers/vehicle/vehicleContext";
import { ModalEditAdButton } from "../ModalEditAd/ModalEditAd";
import { UserContext } from "../../providers/user/userContext";

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

    const routeChange = (id: string) =>{ 
      let path = `product/`+ id; 
      history.push(path);
    }

    const {getCarsByUser, userCars, deleteVehicle, setId}:any = useContext(AuthContext)
    
    useEffect(() => {getCarsByUser()}, [])

    const deleteCar = (id: string) =>{
      deleteVehicle(id)
      location.reload()
    }
    
    return(
        <CarSection>
            <div className="tittleDiv">
                <h1>Carros</h1>
            </div>
              <Slider {...settings}>
                  {userCars?.map((car: any, index: any) => (
                              <div key={index} className="card" >
                                  <div onClick={() => {routeChange(car.id)}} className="imgDiv">
                                      <img src={car.urlImage} alt="" />
                                  </div>
                                  <div className="divOne">
                                      <h1>{car.title}</h1>
                                      <p>{car.description}</p>
                                  </div>
                                  <div className="divTwo">
                                      <div>
                                          <img src={userImg} alt="" />
                                          <p>{car.owner}</p>
                                      </div>
                                  </div>
                                  <div className="divTree">
                                      <div>
                                          <div>
                                              <span>{car.mileage}Km</span>
                                              <span>{car.year}</span>
                                          </div>
                                          <p>R${car.price},00</p>
                                      </div>
                                  </div>
                                  <div className="divFourth">
                                    <button className="edit" onClick={() => {setId(car.id)}}><ModalEditAdButton/></button>
                                    <button onClick={() => {deleteCar(car.id)}} className="delete">Deletar</button>
                                  </div>
                              </div>)
                      )}
              </Slider> 
        </CarSection>
    )
}
