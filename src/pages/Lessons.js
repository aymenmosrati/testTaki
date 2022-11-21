import NavBar from "../layouts/navbar/NavBar";
import SideBar from "../layouts/sideBar/SideBar.js";

import "./content.css";

function Lessons() {
  return (
    <div className="lessons">
      <NavBar />
      <SideBar />
      <h2>Lessons</h2>
    </div>
  );
}

export default Lessons;
