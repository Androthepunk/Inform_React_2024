import { Routes, Route } from "react-router";
import App from "../App";
import NewPlayList from "./FuncComp/NewPlayList";

function MyRoutes (){
    return(

    
    
    <Routes>
        <Route path='/inicio'/>
        <Route path='/Home' element={<App/>}/>
        {/*<Route path='/Categorias' element={<Categorias categs={categs}/>}/>*/}
        <Route path='/New Play List' element={<NewPlayList/>}/>
       {/* <Route path='/Logueate' element={<Login logs={logs}/>}/>*/}
        
    </Routes>
    
     )}

    export default MyRoutes