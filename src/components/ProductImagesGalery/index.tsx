import { Container } from "./style"
import car from "../../assets/car.jpeg";



export const ProductImagesGalery = () => {
    return (
      <>
        <Container>
          <h1>Fotos</h1>
            <div className="galery">
              
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
                <img src={car} alt="image from the gallery"></img>
            </div>        
        </Container>
      </>
    );
  };