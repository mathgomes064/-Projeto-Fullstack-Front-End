import { Cars } from "../../components/Cars";
import { DashboardPage } from "./style";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BlueSign } from "../../components/Sign";
import { Motorcycles } from "../../components/Motorcycles";
import { ProductAuction } from "../../components/Auction";

export const Dashboard = () => {
  return (
    <DashboardPage>
        <Header/>
        <BlueSign/>
        <ProductAuction/>
        <Cars />
        <Motorcycles/>
        <Footer />     
    </DashboardPage>
  );
};
