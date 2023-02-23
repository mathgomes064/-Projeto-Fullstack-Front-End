import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CommentCard } from "../../components/CommentCard";
import { CommentsBoard } from "../../components/CommentsBoard";
import { ProductDescription } from "../../components/ProductDescription";
import { ProductImageExpand } from "../../components/ProductImageExpand";
import { ProductImagesGalery } from "../../components/ProductImagesGalery";
import { ProductProperties } from "../../components/ProductProperties";
import { AdvertisersCard } from "../../components/Advertiser'sCard";

export const Product = () => {
  return (
    <div>
       <Header />
       <AdvertisersCard/>
       <ProductImageExpand/>
       <ProductImagesGalery/>
       <ProductProperties/>
       <ProductDescription/>
       <CommentsBoard/>
    </div>
 ); 
     
};
