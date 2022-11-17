import logo from "./logo.svg";
import "./App.css";
import SideBar from "./Component/SideBar/SideBar";
import Seasons from "./Component/Content/Seasons";
import Lessons from "./Component/Content/Lessons";
import Levels from "./Component/Content/Levels";
import Users from "./Component/Content/Users";
import Settings from "./Component/Content/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
      </div>
      <Routes>
        <Route path="/Seasons" exact element={<Seasons />} />
        <Route path="/Lessons" exact element={<Lessons />} />
        <Route path="/Levels" exact element={<Levels />} />
        <Route path="/Users" exact element={<Users />} />
        <Route path="/Settings" exact element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
