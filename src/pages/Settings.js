import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar";
import "./content.css";

function Settings() {
  return (
    <div className="settings">
      <NavBar />
      <SideBar />
      <h2>Settings</h2>
    </div>
  );
}

export default Settings;
