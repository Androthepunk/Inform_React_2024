import SideBar from "./Compoents/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
import NavBar from "./Compoents/Component_NavBr/NavBar";
import NewPlayList from "./Compoents/All_nav/NewPlayLIst";
import { useState } from "react";
import { Props } from "./Registers/PROFILES";
import { AuthRequired, User } from "./Compoents/Component_NavBr/BannerLogin";
import LoginForm from "./Compoents/Component_NavBr/LoginForm";




function Principal(){
  const [listValue, setList] = useState<Array<Props>>([])
  const [email, setEmail] = useState('');
  //const [visibleF, setVisibleF] = useState(true);
    const USER: User = {
        email: 'androthepunk@gmail.com',
        registrationStatus: 'verified',
      };
     return(<>
     
      <LoginForm email={email} setEmail={setEmail}/>
      {(email===USER.email) ?(
        <AuthRequired user={USER}>
       <BrowserRouter>
            <NavBar/>
           
            <SideBar listValue={listValue}/> 
            <Routes> 
                  <Route path="/" element={<Home/>}/>
                  <Route path="/App" element={<App/>}/>
                  <Route path="/NewPlayList" element={<NewPlayList listValue={listValue} setList={setList}/>} />
               
               </Routes>
               </BrowserRouter>
               </AuthRequired>):( <div className="App"><h3>Ingrese a Nuestra App</h3></div>)}
               

               </>
        
     
    )
    };
   
    
  
    
    export default Principal;
    