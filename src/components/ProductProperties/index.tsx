import { Container } from "./style"


export const ProductProperties = () => {
    return (
      <>
        <Container>
            <div>
                <div>
                    <h1 className="title">Título</h1> 
                </div>
                <div>
                    <div className="year">Ano</div>
                </div>
                <div>
                    <div className="mileage">Km</div>
                    <p className="price">Price</p>
                    <button>Comprar</button> 
                </div>
                
            </div>        
        </Container>y
      </>
    );
  };