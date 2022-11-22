import "./App.css";
import { Seasons } from "./pages/Seasons";
import Lessons from "./pages/Lessons";
import Levels from "./pages/Levels";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

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
