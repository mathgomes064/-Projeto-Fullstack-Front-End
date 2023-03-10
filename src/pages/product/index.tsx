import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CommentCard } from "../../components/CommentCard";
import { CommentsBoard } from "../../components/CommentsBoard";
import { ProductDescription } from "../../components/ProductDescription";
import { ProductImageExpand } from "../../components/ProductImageExpand";
import { ProductImagesGalery } from "../../components/ProductImagesGalery";
import { ProductProperties } from "../../components/ProductProperties";
import { AdvertisersCard } from "../../components/Advertiser'sCard";
import { ProductPage } from "./style";
import Modal from "react-modal";


import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import api from "../../service";
import { Container } from "react-bootstrap";



export const Product = () => {
   const [modalIsOpen, setIsOpen] = useState(false);
  const [customStyle, setCustomStyle] = useState<customStyleType>();

  function handleOpenModal() {
    setIsOpen(true);
  }

  function handleCloseModal() {
    setIsOpen(false);
  }

   const params = useParams();

   const [product, setProduct] = useState()

   const [msgToShow, setMsgToShow] = useState("Carregando...")
   useEffect(() => {
      api
        .get("/vehicles/"+params.id)
        .then((res) => {
          setProduct(res.data);
          console.log(res.data)
          console.log(product)
        })
        .catch((err) => {
            setMsgToShow("Nenhum carro encontrado.")
        }); 
    }, [setProduct]);
    if(product != undefined){
      const prod_properties = {
         "title": product.title, 
         "year": product.year, 
         "mileage": product.mileage, 
         "price": product.price,
         "user": product.user
      }
      return (
         <Container>
           <Header />
           <ProductPage>
              <div className="blueStrip">
                  <div className="body">
                     <div className="productPageright" >
                        <ProductImageExpand img_src={product.urlImage}/> 
                        <ProductProperties prod_properties={prod_properties} user={product.user}/>
                        <ProductDescription desc={product.description}/>
                        <CommentsBoard vehicle_id={product.id}/>
                     </div>
                     <div className="productPageleft">
                        <ProductImagesGalery vehicleImages={product.vehicleImages}/>
                        <AdvertisersCard user={product.user}/>
                        <CommentCard productId={product.id}/>
                     </div>
                  </div>
              
              </div>
           </ProductPage>
         </Container>
      ); 
    } else {
      return <>{msgToShow}</>
    }
  
     
};
