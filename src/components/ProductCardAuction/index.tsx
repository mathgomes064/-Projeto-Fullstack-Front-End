import { Container } from "./style";
import background from "../../assets/backgroundcardauction.svg";
import timer from "../../assets/timer.svg";
import arrow from "../../assets/arrow.svg";

export const ProductCardAuction = () => {
  return (
    <>
      <Container>
        <div className="body">
          <div className="timer">
            <img src={timer} alt="timer" />
            <span>01:58:00</span>
          </div>
          <span className="title">
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
          </span>
          <span className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </span>
          <div className="profile">
            <div className="iconProfile">
              <b>R</b>
            </div>
            <span>Rodrigo Tavares</span>
          </div>
        <button>
          Acessar página do leilão <img src={arrow} alt="arrow" />
        </button>
        </div>
      </Container>
    </>
  );
};
