import { DashboardPage } from "./style";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { BlueSign } from "../../components/Sign";
import { ProductAuction } from "../../components/Auction";
import { DashboardCars } from "../../components/DashboardCars";
import { DashboardMotorcycles } from "../../components/DashboardMotorcycles";

export const Dashboard = () => {

  
  return (
    <DashboardPage>
        <Header/>
        <BlueSign/>
        <ProductAuction/>
        <DashboardCars />
        <DashboardMotorcycles/>
        <Footer />     
    </DashboardPage>
  );
};
