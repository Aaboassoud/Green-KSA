import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Register from "./Components/Pages/Register";
import LogIn from "./Components/Pages/LogIn";
import Profile from "./Components/Pages/Profile";
import Posters from "./Components/Pages/Posters";
import Rating from "./Components/Pages/Rating";
import FooterBar from "./Components/FooterBar";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/rating" element={<Rating />} />
        </Routes>
        <FooterBar />
      </Router>
    </div>
  );
}

export default App;
