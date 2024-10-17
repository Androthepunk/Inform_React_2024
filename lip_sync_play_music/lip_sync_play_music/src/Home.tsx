import { useState } from "react";
import { Banner, User } from "./Compoents/Component_NavBr/BannerLogin";

import "./Images/Artists/los_palmeras.jpg"

const LOGO ="./assets/9648321_38772.svg";


export function Home(){
    
    const USER: User = {
        name: 'androthepun@gmail.com',
        registrationStatus: 'verified',
      };
      return(
      <>  
        
            <div className="App">
                <h3>Bienevenido a Nuestra App</h3>
                <Banner type="success">Login Exitoso! Bienvenido, {USER.name}!</Banner>
                <img src={LOGO} width={'150'} height={'150'}/>
            
           </div>
    </>)
    }