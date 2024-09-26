import { Routes, Route } from "react-router";
import App from "../App";
//import NewPlayList from "./FuncComp/NewPlayList";
import ComponentsList from "./All_nav/ComponentsList";

function MyRoutes (){
    return(

    
    
    <Routes>
        <Route path='/inicio'/>
        <Route path='/Home' element={<App/>}/>
        {/*<Route path='/Categorias' element={<Categorias categs={categs}/>}/>*/}
        <Route path='/ComponentsList' element={<ComponentsList/>}/>
       {/* <Route path='/Logueate' element={<Login logs={logs}/>}/>*/}
        
    </Routes>
    
     )}

    export default MyRoutes