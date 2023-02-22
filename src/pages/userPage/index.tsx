import { Header } from "../../components/Header";
import { StyleUserPage } from "./style";
import { Footer } from "../../components/Footer";
import { UserCard } from "../../components/UserCard"

export const UserPage = () =>{
    return (
        <StyleUserPage>
            <div id="blue-background">
                <UserCard />
            </div>
          <Header/>
          
          <Footer />
        </StyleUserPage>
      );
}