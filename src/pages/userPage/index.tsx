import { Header } from "../../components/Header";
import { StyleUserPage } from "./style";
import { Footer } from "../../components/Footer";


export const UserPage = () =>{
    return (
        <StyleUserPage>
          <Header/>
          <Cars />
          <Footer />
        </StyleUserPage>
      );
}