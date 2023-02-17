import { Cars } from "../../components/Cars";
import { DashboardPage } from "./style";
import { ProductCardAuction } from "../../components/ProductCardAuction";
import { Footer } from "../../components/Footer";

export const Dashboard = () => {
  return (
    <DashboardPage>
      <ProductCardAuction />
      <Cars />
      <Footer />
    </DashboardPage>
  );
};
