import { Container } from "./style"
import car from "../../assets/car.jpeg";



export const ProductImageExpand = () => {
    return (
      <>
        <Container>
          <div> 
            <img src={car} alt="Car image"/>
          </div>
        </Container>y
      </>
    );
  };