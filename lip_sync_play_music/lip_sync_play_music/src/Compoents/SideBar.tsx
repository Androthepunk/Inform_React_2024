//import {  NavLink } from "react-router-dom";

import "./Styles/Sidebar.css";
//import ListNew from "./All_nav/ListNew";
import { Props } from "../Registers/PROFILES";
import { useState } from "react";
//import Desplegar from "./All_nav/Desplegar";
import { NavLink } from "react-router-dom";
import ListNew from "./All_nav/ListNew";
{/*import { Home } from "../Home";*/}

type PropList={
  listValue:Array<Props>
}

function SideBar({listValue}:PropList) {
  const [visible, setVisible]= useState(false)
  const [boton,setBoton]=useState('')
  return (
    <>
      
      <button className='button' onClick={() => {
          if (visible===false) {setVisible(()=>true);setBoton(()=>'🎼' );console.log('visible es ',visible)}
            else 
              if (visible===true) {setVisible(()=>false);setBoton(()=>'' );console.log('visible es ',visible)}}}>
                          Side Bar: {boton}                    
       </button>
      
       
        {(visible) ?(
        <div className="sidebar">
            <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/App">Listas de Reproducciones</NavLink></li>
            <li><NavLink to="/NewPlayList">Agregar Playlist</NavLink></li>
            <li className="listado"><p>Recién Agregados </p><ListNew listValue={listValue} /></li>
            </ul>
            </div>) : (<div ></div>)}
        
      
    </>
     
    );
}




export default SideBar