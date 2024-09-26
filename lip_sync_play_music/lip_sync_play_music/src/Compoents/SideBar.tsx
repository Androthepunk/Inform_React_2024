import { Link } from "react-router-dom";

//import styled from "styled-components";
//import logo from "../assets/react.svg";
//import { v } from "./Styles/Variables";


//import { NavLink, Route } from "react-router-dom";
//import { useContext } from "react";
//import { ThemeContext } from "../Principal";

function SideBar() {
  return (
    <div className="sidebar">
    <ul>
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/App">Listas de Reproducciones</Link></li>
      <li><Link to="/ComponentsList">Nuevo Playlist</Link></li>
    </ul>
    </div>
    );
}




export default SideBar