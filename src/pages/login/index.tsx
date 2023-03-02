import { Header } from "../../components/Header";
import { LoginCard } from "../../components/LoginCard";
import { LoginPage, Container } from "./style";
import { Footer } from "../../components/Footer";

export const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <LoginPage>
          <LoginCard />
        </LoginPage>
      </Container>
      <Footer />
    </>
  );
};
