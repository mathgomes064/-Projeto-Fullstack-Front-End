import { Header } from "../../components/Header";
import { RegisterCard } from "../../components/RegisterCard";
import { RegisterPage, Container } from "./style";
import { Footer } from "../../components/Footer";

export const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <RegisterPage>
          <RegisterCard />
        </RegisterPage>
      </Container>
      <Footer />
    </>
  );
};
