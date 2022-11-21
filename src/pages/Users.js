import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import "./content.css";

function Users() {
  return (
    <div className="users">
      <NavBar />
      <SideBar />
      <h2>Users</h2>
    </div>
  );
}

export default Users;
