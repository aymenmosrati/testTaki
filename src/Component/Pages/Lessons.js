import img from "../../assets/digging.png";
import NavBar from "../Layouts/NavBar/NavBar";
import SideBar from "../Layouts/SideBar/SideBar.js";

import "./content.css";

function Lessons() {
  return (
    <div className="lessons">
      <NavBar />
      <SideBar />
      <img src={img} className="Lessons-img img" alt="Lessons-img" />
    </div>
  );
}

export default Lessons;
