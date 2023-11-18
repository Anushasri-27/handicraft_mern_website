import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbars from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbars />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      
    </div>
  );
}

export default App;
