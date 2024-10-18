
import { Banner, User } from "./Compoents/component_NavBr/BannerLogin";

import "./Images/Artists/los_palmeras.jpg"

const LOGO ="./assets/9648321_38772.svg";


export function Home(){
    
    const USER: User = {
        email: 'androthepun@gmail.com',
        registrationStatus: 'verified',
      };
      return(
      <>  
        
            <div className="App">
                <h3>Bienevenido a Nuestra App</h3>
                <Banner type="success">Login Exitoso! Bienvenido, {USER.email}!</Banner>
                <img src={LOGO} width={'150'} height={'150'}/>
            
           </div>
    </>)
    }