import "./App.css";
import "./App2.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Profile from "./Components/Pages/Profile";
import Posters from "./Components/Pages/Posters";
import FooterBar from "./Components/FooterBar";
import NavBar from "./Components/NavBar";
import LogInRegister from "./Components/Pages/LogInRegister";
import Instructions from "./Components/Pages/Instructions";
import Ticket from "./Components/Pages/Ticket";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

import Explorer from "./Components/Pages/Explorer";
import EditProfile from "./Components/Pages/EditProfile";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogInRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/instuctioms" element={<Instructions />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/editprofile" element={<EditProfile />} />
        </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
