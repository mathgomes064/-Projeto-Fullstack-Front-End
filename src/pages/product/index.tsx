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

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import api from "../../service";



export const Product = () => {
   const params = useParams();

   const [product, setProduct] = useState()

   const [msgToShow, setMsgToShow] = useState("Carregando...")
   useEffect(() => {
      api
        .get("/vehicles/"+params.id)
        .then((res) => {
          setProduct(res.data);
          console.log(res)
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
         "price": product.price
      }
      return (
         <div>
           <Header />
           <ProductPage>
              <div className="blueStrip"></div>
              <div className="body">
                 
                 <div className="productPageright" >
                    <ProductImageExpand img_src={product.urlImage}/> 
                    <ProductProperties prod_properties={prod_properties}/>
                    <ProductDescription desc={product.description}/>
                    <CommentsBoard/>
                 </div>
                 <div className="productPageleft">
                    <ProductImagesGalery/>
                    <AdvertisersCard/>
                 </div>
              </div>
                
           </ProductPage>
           <Footer/> 
         </div>
      ); 
    } else {
      return <>{msgToShow}</>
    }
  
     
};
