import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Auction } from "./style"
import user from "../../assets/user.jpg"
import Slider from "react-slick"
import {AiOutlineClockCircle} from "react-icons/ai"
import {BsArrowRight} from "react-icons/bs"

export const ProductAuction = () =>{
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
      };

    return(
        <Auction>
            <div className="tittleDiv">
                <h1>Leilão</h1>
            </div>
            <Slider {...settings}>
                <div className="container">
                    <div className="body">
                        <div className="content">
                            <div className="timeDiv">
                                <div className="timer">
                                    <AiOutlineClockCircle className="clock"/>
                                    <span>01:58:00</span>
                                </div>
                            </div>
                            <span className="title">
                                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
                            </span>
                            <span className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem...
                            </span>
                            <div className="profile">
                                <div>
                                    <img src={user} alt="user" />
                                    <span>Rodrigo Tavares</span>
                                </div>
                            </div>
                            <div className="specifications">
                                <div className="innerFooterSpecifications">
                                    <div className="innerDiv">
                                        <div>
                                            <span>2013</span>
                                            <span>0 KM</span>
                                        </div>
                                        <h1 className="responsivePrice">R$ 00.000,00</h1>
                                    </div>
                                    <h1 className="desktopPrice">R$ 00.000,00</h1>
                                </div>
                            </div>
                        </div>
                        <div className="footerCard">
                            <h1>Acessar página do leilão</h1>
                            <div>
                                <BsArrowRight className="rightArrow"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="body">
                        <div className="content">
                            <div className="timeDiv">
                                <div className="timer">
                                    <AiOutlineClockCircle className="clock"/>
                                    <span>01:58:00</span>
                                </div>
                            </div>
                            <span className="title">
                                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
                            </span>
                            <span className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem...
                            </span>
                            <div className="profile">
                                <div>
                                    <img src={user} alt="user" />
                                    <span>Rodrigo Tavares</span>
                                </div>
                            </div>
                            <div className="specifications">
                                <div>
                                    <span>2013</span>
                                    <span>0 KM</span>
                                </div>
                                
                                <h1>R$ 00.000,00</h1>
                        
                            </div>
                        </div>
                        <div className="footerCard">
                            <h1>Acessar página do leilão</h1>
                            <div>
                                <BsArrowRight className="rightArrow"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="body">
                        <div className="content">
                            <div className="timeDiv">
                                <div className="timer">
                                    <AiOutlineClockCircle className="clock"/>
                                    <span>01:58:00</span>
                                </div>
                            </div>
                            <span className="title">
                                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
                            </span>
                            <span className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem...
                            </span>
                            <div className="profile">
                                <div>
                                    <img src={user} alt="user" />
                                    <span>Rodrigo Tavares</span>
                                </div>
                            </div>
                            <div className="specifications">
                                <div>
                                    <span>2013</span>
                                    <span>0 KM</span>
                                </div>
                                
                                <h1>R$ 00.000,00</h1>
                        
                            </div>
                        </div>
                        <div className="footerCard">
                            <h1>Acessar página do leilão</h1>
                            <div>
                                <BsArrowRight className="rightArrow"/>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </Auction>
    )
}