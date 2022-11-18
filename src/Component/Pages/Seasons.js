import img from "../../assets/digging.png";
import NavBar from "../Layouts/NavBar/NavBar";
import SideBar from "../Layouts/SideBar/SideBar";
import "./content.css";

function Seasons() {
  return (
    <div className="seasons">
      <NavBar />
      <SideBar />
      <img src={img} className="Seasons-img img" alt="Seasons-img" />
    </div>
  );
}

export default Seasons;
