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

export const Product = () => {
  return (
    <div>
      <Header />
      <ProductPage>
         <div className="productPageright">
            <ProductImageExpand/> 
            <ProductProperties/>
            <ProductDescription/>
            <CommentsBoard/>
         </div>
         <div className="productPageleft">
            <ProductImagesGalery/>
            <AdvertisersCard/>
         </div>
                  
      </ProductPage>
      <Footer/> 
    </div>
 ); 
     
};
