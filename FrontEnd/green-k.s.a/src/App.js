import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Profile from "./Components/Pages/Profile";
import Posters from "./Components/Pages/Posters";
import FooterBar from "./Components/FooterBar";
import NavBar from "./Components/NavBar";
import LogInRegister from "./Components/Pages/LogInRegister";
import Instructions from "./Components/Pages/Instructions";
import Ticket from "./Components/Pages/Ticket"

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
        </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
