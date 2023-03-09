import { Container } from "./style"
import car from "../../assets/car.jpeg";



export const ProductImagesGalery = ({vehicleImages}) => {
    if (vehicleImages!=undefined && vehicleImages.length > 0){
      return (
        <>
          <Container>
            <div className="titleBox">
              <h1>Fotos</h1> 
            </div>
            <div className="galeryBox">
              <div className="galery">
                {vehicleImages.map((pic: any, index: any) => (
                  <img key={pic.id} src={pic.url} alt="image from the gallery"></img>
                ))}
              </div>        
            </div>
          </Container>
        </>
      );
    }
    return (
      <>
        <Container>
          <div className="titleBox">
            <h1>Fotos</h1> 
          </div>
          <div className="galeryBox">
            <div className="galery">
                Sem imagens
            </div>        
          </div>
        </Container>
      </>
    );
  };