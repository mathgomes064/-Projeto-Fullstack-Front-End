import { Header } from "../../components/Header";
import { RecPasswordCard } from "../../components/RecPasswordCard";
import { RecPage, Container } from "./style";
import { Footer } from "../../components/Footer";

export const RecPassword = () => {
  return (
    <>
      <Header />
      <Container>
        <RecPage>
          <RecPasswordCard />
        </RecPage>
      </Container>
      <Footer />
    </>
  );
};