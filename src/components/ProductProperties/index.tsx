import { Container } from "./style"


export const ProductProperties = ({prod_properties}) => {
    return (
      <>
        <Container>
            <div className="propertierBox">
                <div className="propertiesTop">
                    <h1 className="title">{prod_properties.title}</h1> 
                </div>
                <div className="propertiesMiddle">
                    <div className="yearAndMilage">
                        <p className="littleBox">{prod_properties.year}</p>
                        <div className="littleBox">{prod_properties.mileage}</div> 
                    </div>
                    <div>
                        <div className="price">{prod_properties.price}</div>
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