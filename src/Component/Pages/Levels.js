import img from "../../assets/digging.png";
import NavBar from "../Layouts/NavBar/NavBar";
import SideBar from "../Layouts/SideBar/SideBar";
import "./content.css";

function Levels() {
  return (
    <div className="levels">
      <NavBar />
      <SideBar />
      <img src={img} className="Levels-img img" alt="Levels-img" />
    </div>
  );
}

export default Levels;
