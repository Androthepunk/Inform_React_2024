import { AuthRequired, Banner, User } from "./Compoents/Component_NavBr/Login";
import "./Images/Artists/los_palmeras.jpg"

const LOGO ="./assets/9648321_38772.svg";


export function Home(){
    const USER: User = {
        name: 'Andro',
        registrationStatus: 'verified',
      };
    return(
        <>
            <div className="App">
            <AuthRequired user={USER}>
                <h3>Bienevenido a Nuestra App</h3>
                <Banner type="success">Login Exitoso! Bienvenido, {USER.name}!</Banner>
                <img src={'los_palmeras.jpg'} width={'150'} height={'150'}/>
            </AuthRequired>
            </div>
        </>
    )
}
