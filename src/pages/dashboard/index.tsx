import { Cars } from "../../components/Cars";
import { DashboardPage } from "./style";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const Dashboard = () => {
  return (
    <DashboardPage>
      <Header/>
      <Cars />
      <Footer />
    </DashboardPage>
  );
};
