import "./App.css";
import { Seasons } from "./pages/Seasons";
import Lessons from "./pages/Lessons";
import Levels from "./pages/Levels";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import { Notfound } from "./Notfound";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Seasons />} />
          <Route path="/Lessons" element={<Lessons />} />
          <Route path="/Levels" element={<Levels />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
