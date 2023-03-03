 import { useHistory } from "react-router-dom";
import { Container } from "./style"



  export const AdvertisersCard = () => {

    const history = useHistory();

    const routeChange = (id) =>{ 
      let path = `user/`+ id; 
      history.push(path);
    }
      return (
        <>
          <Container>
              <div className="userCard">
                  <div className="userPhoto" >
                  </div>
                  <p>User</p>
              </div>
              <div className="descriptionCard">
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus saepe temporibus hic cum inventore minima, dolorem tempora enim facilis.</p>
                  <button>Ver todos anúncios</button>
              </div>   
          </Container>
        </>
      );
    };