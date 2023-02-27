import { Container } from "./style"


export const ProductProperties = (desc) => {
    console.log(desc.desc)
    return (
      <>
        <Container>
            <div className="propertierBox">
                <div className="propertiesTop">
                    <h1 className="title">{desc.title}</h1> 
                </div>
                <div className="propertiesMiddle">
                    <div className="yearAndMilage">
                        <p className="littleBox">{desc.year}</p>
                        <div className="littleBox">{desc.mileage}</div> 
                    </div>
                    <div>
                        <div className="price">{desc.price}</div>
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