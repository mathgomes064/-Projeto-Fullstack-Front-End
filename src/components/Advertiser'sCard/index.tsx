 import { useHistory } from "react-router-dom";
import { Container } from "./style"



  export const AdvertisersCard = ({user}) => {

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
                  <p>{user.name}</p>
              </div>
              <div className="descriptionCard">
                  <p>{user.description}</p>
                  <button>Ver todos anúncios</button>
              </div>   
          </Container>
        </>
      );
    };