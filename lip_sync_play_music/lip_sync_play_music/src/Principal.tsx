import { createContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MyRoutes from "./Compoents/MyRoutes";
import SideBar from "./Compoents/SideBar";
//import {Light, Dark} from "./Compoents/Styles/Themes.ts";

import App from "./App";
export const ThemeContext=createContext(null)

function Principal(){
    //const [theme, setTheme]=useState("light");
    //const themeStyle=theme==='ligth'? Light : Dark;
    //const [sidebarOpen, setSidebarOpen] = useState(true);
    return(
        <>
            
                
                    <BrowserRouter>
                        <Route>
                            <SideBar />
                            <MyRoutes/>
                            <App />
                        </Route>
                    </BrowserRouter>
              
             
        </>
        )
    };
   
    
  
    
    export default Principal;
    