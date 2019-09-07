import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import history from "../../history";
import { logOut } from "../../actions/dashboard"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

const Header = props => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { authenticate, userType } = useSelector(state => state.dashboard);
  const handleClick = redirect => {
    history.push(`/${redirect}`);
  };
  return (
    <div>
      {authenticate && (
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">HelpDesk</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <a href="#" onClick={() => handleClick("dashboard")}>
                Dashboard
              </a>
            </NavItem>
            <NavItem>
              <a href="#" onClick={() => handleClick("createTicket")}>
                Create Ticket
              </a>
            </NavItem>
            {userType === "admin" && (
              <Fragment>
                <NavItem>
                  <a href="#" onClick={() => handleClick("createUser")}>
                    Create User
                  </a>
                </NavItem>
                <NavItem>
                  <a href="#" onClick={() => handleClick("users")}>
                    Users List
                  </a>
                </NavItem>
              </Fragment>
            )}
          </Nav>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>Murali Krishna</NavItem>
              <NavItem>
                  <a href="#" onClick={() => dispatch(logOut(history))}>
                    Logout
                  </a>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
