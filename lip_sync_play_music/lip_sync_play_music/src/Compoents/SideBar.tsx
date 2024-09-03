//import styled from "styled-components";
import logo from "../assets/react.svg";
//import { v } from "./Styles/Variables";


import { NavLink, Route } from "react-router-dom";
//import { useContext } from "react";
//import { ThemeContext } from "../Principal";




// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useContext } from "react";


function SideBar() {
  
  

  return (
    <Route >
      <button className="Sidebarbutton" onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} />
        </div>
        <h2>codigo369</h2>
      </div>
      {linksArray.map(({ icon, label }) => (
        <div className="LinkContainer" key={label}>
          <NavLink>
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <aside />
      {secondarylinksArray.map(({ icon, label }) => (
        <div className="LinkContainer" key={label}>
          <NavLink>
            <div className="Linkicon">{icon}</div>
            {sidebarOpen && <span>{label}</span>}
          </NavLink>
        </div>
      ))}
      <aside />
      <div className="Themecontent">
        {sidebarOpen && <span className="titletheme">Dark mode</span>}
        <div className="Togglecontent">
          <div className="grid theme-container">
            <div className="content">
              <div className="demo">
                <label className="switch" >
                  <input
                    
                    type="checkbox"
                    className="theme-swither"
                    onClick={CambiarTheme}
                  ></input>
                  <span  className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Route>
  );
}
//#region Data links
const linksArray = [
  {
    label: "Home",
   
    to: "/",
  },
  {
    label: "Acerca",
    
    to: "/Acerca",
  },
  {
    label: "New Play List",
    
    to: "/NewPlayList",
  },
  
];
const secondarylinksArray = [
  {
    label: "Configuración",
   
    to: "/null",
  },
  {
    label: "Salir",
    
    to: "/null",
  },
];

export default SideBar