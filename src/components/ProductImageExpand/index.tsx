import { Container } from "./style"



export const ProductImageExpand = ({img_src}) => {
    return (
      <>
        <Container>
          <div className="divImage"> 
            <img src={img_src} alt="Car image"/>
          </div>
        </Container>
      </>
    );
  };