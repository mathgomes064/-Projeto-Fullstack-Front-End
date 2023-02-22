import { Header } from "../../components/Header";
import { StyleUserPage } from "./style";
import { Footer } from "../../components/Footer";
import { UserCard } from "../../components/UserCard";
import { Cars } from "../../components/Cars";
import { ProductAuction } from "../../components/Auction";
import { Motorcycles } from "../../components/Motorcycles"
export const UserPage = () => {
  return (
    <>
      <Header />
      <StyleUserPage>
        <div id="blue-background">
          <UserCard />
        </div>
        <div id="container-auction">
          <ProductAuction /> 
        </div>
        <div id="container-cars">
          <Cars />
        </div>
        <div id="container-motorcycles">
          <Motorcycles />
        </div>
      </StyleUserPage>
      <Footer />
    </>
  );
};
