import { Container } from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../service";

export const ProductProperties = ({ prod_properties, user }: any) => {
  const params = useParams();

  const [product, setProduct] = useState()

  useEffect(() => {
    api
      .get("/vehicles/"+params.id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data)
        console.log(product)
      })
      .catch((err) => {
          console.log(err)
      }); 
  }, [setProduct]);

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
            {user.cellPhone && (
              <a
                href={`https://api.whatsapp.com/send?phone=+55${user.cellPhone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20anuncio%20na%20internet%2C%20gostaria%20de%20saber%20mais%20sobre%20seu%20veículo!`}
                target="_blank"
              >
                Comprar
              </a>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
