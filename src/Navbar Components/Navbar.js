import React, { useState } from "react";
import { useAuth } from "../User Related Pages/AuthContext";
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from "./NavbarElement";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Navbar = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleLogout() {
    try {
      await logout();
      navigate("/", { replace: true });
    } catch {
      navigate("/", { replace: true });
    }
  }

  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("./logo.jpeg")} alt="DSA Sheets" style={{ height:"100%", width:"100%" }} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          
          {currentUser && (
            <>
              <Button onClick={handleShow} variant="primary">Profile</Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="text-center">Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <strong> Email: </strong> {currentUser.email}
                </Modal.Body>
                <Modal.Body>
                  <Link to="/" className="btn btn-primary w-100">
                    Update Profile
                  </Link>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleLogout}> Log Out </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}

          {!currentUser && (
            <>
              <NavLink to="/signup" activeStyle>
                Sign Up
              </NavLink>
              <NavBtnLink to="/login">Log In</NavBtnLink>
            </>
          )}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
