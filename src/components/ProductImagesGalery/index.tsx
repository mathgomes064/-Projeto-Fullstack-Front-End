import { Container } from "./style"
import car from "../../assets/car.jpeg";



export const ProductImagesGalery = () => {
    return (
      <>
        <Container>
          <div className="titleBox">
            <h1>Fotos</h1>
          </div>
          <div className="galeryBox">
            <div className="galery">
                
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
            </div>        
          </div>
        </Container>
      </>
    );
  };