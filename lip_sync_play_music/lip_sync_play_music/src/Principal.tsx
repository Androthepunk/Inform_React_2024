//import { createContext,  } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
//import MyRoutes from "./Compoents/MyRoutes";
//import SideBar from "./Compoents/SideBar";
//import {Light, Dark} from "./Compoents/Styles/Themes.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ComponentsList from "./Compoents/All_nav/ComponentsList";
import SideBar from "./Compoents/SideBar";
import { Home } from "./Home";
//export const ThemeContext=createContext(null)

function Principal(){
    {/*const [theme, setTheme]=useState("light");
    const themeStyle=theme==='ligth'? Light : Dark;
    const [sidebarOpen, setSidebarOpen] = useState(true);*/}
    return(
        <>     
            <BrowserRouter>
                <SideBar />
                <Routes>                
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/App" element={<App/>}/>
                    <Route path="/ComponentsList" element={<ComponentsList/>} />
                        {/*
                        <MyRoutes/>*/}
                    
                </Routes>
             </BrowserRouter> 
              
             
        </>
        )
    };
   
    
  
    
    export default Principal;
    