import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { DiIntellij } from 'react-icons/di'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavbarComponent = () => {
  const linkStyles = {
    textDecoration: 'none',
    color: 'black',
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const stateToken = useSelector((state) => state.auth.token)
  let isLoggedIn
  if (stateToken === null) {
    isLoggedIn = (
      <>
        <NavItem>
          <NavLink>
            <Link
              style={{
                textDecoration: linkStyles.textDecoration,
                color: linkStyles.color
              }}
              to="/"
            >
              Sign up
                    </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link
              style={{
                textDecoration: linkStyles.textDecoration,
                color: linkStyles.color
              }}
              to="/sign-in"
            >
              Sign in
                    </Link>
          </NavLink>
        </NavItem>
      </>
    )
  } else {
    isLoggedIn = (
      <>
        <NavItem>
          <NavLink>
            <Link
              style={{
                textDecoration: linkStyles.textDecoration,
                color: linkStyles.color
              }}
              to="/dashboard"
            >
              Contacts
                    </Link>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link
              style={{
                textDecoration: linkStyles.textDecoration,
                color: linkStyles.color
              }}
              to="/create"
            >
              Add Contact
                    </Link>
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <span
              style={{
                textDecoration: linkStyles.textDecoration,
                color: linkStyles.color
              }}
            >Account</span>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Log out
                </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    )
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <Link
            style={{
              textDecoration: linkStyles.textDecoration,
              color: linkStyles.color
            }}
            to="/"
          >
            <DiIntellij />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isLoggedIn}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent
