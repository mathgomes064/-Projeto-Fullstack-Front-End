import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MotorcycleSection } from "./style"
import moto from "../../assets/moto.png"
import user from "../../assets/user.jpg"
import Slider from "react-slick"
import { useContext, useEffect } from "react";
import { AuthContext } from "../../providers/vehicle/vehicleContext";
import { useHistory } from "react-router-dom";

export const Motorcycles = () =>{
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

    const {getMotorcyclesByUser, userMotorcycles}:any = useContext(AuthContext)

    const history = useHistory();

    const routeChange = (id: string) =>{ 
      let path = `product/`+ id; 
      history.push(path);
    }

    useEffect(() => getMotorcyclesByUser(), [])

    return(
        <MotorcycleSection>
            <div className="tittleDiv">
                <h1>Motos</h1>
            </div>
            <Slider {...settings}>
                    {userMotorcycles?.map((motorcycle: any, index: any) =>(
                        <div key={index} className="card"  onClick={() => {routeChange(motorcycle.id)}}>
                            <div className="imgDiv">
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
                                    <p>R${motorcycle.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                )}

                {/* <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="imgDiv">
                        <img src={moto} alt="" />
                    </div>
                    <div className="divOne">
                        <h1>Product title stays here - max 1 line</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto optio quasi... </p>
                    </div>
                    <div className="divTwo">
                        <div>
                            <img src={user} alt="" />
                            <p>Anunciante</p>
                        </div>
                    </div>
                    <div className="divTree">
                        <div>
                            <div>
                                <span>0KM</span>
                                <span>2019</span>
                            </div>
                            <p>R$ 00.000,00</p>
                        </div>
                    </div>
                </div> */}
            </Slider>
        </MotorcycleSection>
    )
}