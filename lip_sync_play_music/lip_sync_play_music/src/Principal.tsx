import SideBar from "./Compoents/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Home } from "./Home";
import NavBar from "./Compoents/Component_NavBr/NavBar";
import NewPlayList from "./Compoents/All_nav/NewPlayLIst";
import { useState } from "react";
import { Props } from "./Registers/PROFILES";
import Login from "./Compoents/Component_NavBr/Login";



function Principal(){
  const [listValue, setList] = useState<Array<Props>>([])
     return(
      
       <BrowserRouter>
            
           <NavBar/>
           <SideBar listValue={listValue}/> 
           <Routes> 
              <Route path="/" element={<Home/>}/>
                 <Route path="/App" element={<App/>}/>
                 <Route path="/NewPlayList" element={<NewPlayList listValue={listValue} setList={setList}/>} />
              </Routes>
               
          
      </BrowserRouter>  
     
    )
    };
   
    
  
    
    export default Principal;
    