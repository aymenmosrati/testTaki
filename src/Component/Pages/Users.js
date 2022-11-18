import img from "../../assets/digging.png";
import NavBar from "../Layouts/NavBar/NavBar";
import SideBar from "../Layouts/SideBar/SideBar";
import "./content.css";

function Users() {
  return (
    <div className="users">
      <NavBar />
      <SideBar />
      <img src={img} className="Users-img img" alt="Users-img" />
    </div>
  );
}

export default Users;
