import { Link } from "react-router-dom";

import "./Styles/Sidebar.css";
import { Home } from "../Home";

function SideBar() {
  return (
    <div className="side-bar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/App">Listas de Reproducciones</Link></li>
      <li><Link to="/ComponentsList">Agregar Playlist</Link></li>
      <li></li>
    </ul>
    
    </div>
    );
}




export default SideBar