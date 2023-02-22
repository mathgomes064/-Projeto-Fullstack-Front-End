import { Header } from "../../components/Header";
import { StyleUserPage } from "./style";
import { Footer } from "../../components/Footer";
import { UserCard } from "../../components/UserCard";
import { Cars } from "../../components/Cars";
// import { Auction } from "../../components/Auction";
export const UserPage = () => {
  return (
    <>
      <Header />
      <StyleUserPage>
        <div id="blue-background">
          <UserCard />
        </div>
        <div id="container-auction">
          <h2>Leilão</h2>
          {/* <Auction /> */}
        </div>
        <div id="container-cars">
          <h2>Carros</h2>
          <Cars />
        </div>
      </StyleUserPage>
      <Footer />
    </>
  );
};
