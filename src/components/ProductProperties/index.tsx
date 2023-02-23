import { Container } from "./style"


export const ProductProperties = () => {
    return (
      <>
        <Container>
            <div className="propertierBox">
                <div className="propertiesTop">
                    <h1 className="title">Lorem ipsum dolor sit amet consectetur, adipisicing elit</h1> 
                </div>
                <div className="propertiesMiddle">
                    <div className="yearAndMilage">
                        <p className="littleBox">Ano</p>
                        <div className="littleBox">Km</div> 
                    </div>
                    <div>
                        <div className="price">R$ 0.000,00</div>
                    </div>                
                    
                </div>
                <div className="propertiesBottom">
                    <button>Comprar</button> 
                </div>
                
            </div>        
        </Container>
      </>
    );
  };