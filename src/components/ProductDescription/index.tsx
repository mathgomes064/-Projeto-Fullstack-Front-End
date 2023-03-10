import { Container } from "./style"



export const ProductDescription = ({desc}) => {
    return (
      <>
        <Container>
          <div> 
             <h1>Descrição</h1>
              <p>{desc}</p>
          </div>
          </Container>
      </>
    );
  };