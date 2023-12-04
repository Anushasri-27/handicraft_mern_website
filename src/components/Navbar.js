import React,{useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import useUserContext from '../UserContext'

const Navbars = () => {
  const { loggedIn, logout } = useUserContext();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );

  const showLogInOption = () => {
    if (loggedIn) {
      return (
        <>
          {/* <li className='px-1 py-0 my-0'>
            <img width ={60} height={50} className='ms-2 rounded-circle' src={"http://localhost:5000/" + currentUser.avatar} alt="" />
          </li> */}
          {/* <li>
            <h6 className='px-1 py-2 my-0 text-success'>{currentUser.name}</h6>
          </li> */}
          <Link className='px-4 py-1 my-0 ' >
            <button onClick={logout} className='btn btn-danger text-center '>Log Out</button>
          </Link>
        </>
      );
    }
    else {
      return (
        <>
          <li className='px-4 py-1 my-0 ' >
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className='px-4 py-1 my-0 ' >
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </>
      );
    }
  }


  return (
    <div>
      <Navbar data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">KALAA</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/browse">Product</Link>
            {showLogInOption()}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
