import logo from "./logo.svg";
import "./App.css";
import Seasons from "./Component/Pages/Seasons";
import Lessons from "./Component/Pages/Lessons";
import Levels from "./Component/Pages/Levels";
import Users from "./Component/Pages/Users";
import Settings from "./Component/Pages/Settings";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Seasons />} />
          <Route path="/Lessons" exact element={<Lessons />} />
          <Route path="/Levels" exact element={<Levels />} />
          <Route path="/Users" exact element={<Users />} />
          <Route path="/Settings" exact element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
