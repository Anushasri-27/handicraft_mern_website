import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbars from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddProduct from "./components/AddProduct";
import { UserProvider } from './UserContext';
import Browse from "./components/browse";
import ManageProduct from "./components/ManageProduct";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <UserProvider>
          <Navbars />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/AddProduct" element={<AddProduct />} />
            <Route path="/ManageProduct" element={<ManageProduct />} />
          </Routes>
        </UserProvider>
      {/* </BrowserRouter> */}


    </div>
  );
}

export default App;
