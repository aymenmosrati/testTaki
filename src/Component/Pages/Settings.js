import img from "../../assets/digging.png";
import NavBar from "../Layouts/NavBar/NavBar";
import SideBar from "../Layouts/SideBar/SideBar";
import "./content.css";

function Settings() {
  return (
    <div className="settings">
      <NavBar />
      <SideBar />
      <img src={img} className="Settings-img img" alt="Settings-img" />
    </div>
  );
}

export default Settings;
