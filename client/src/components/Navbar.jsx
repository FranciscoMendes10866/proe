import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
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

import LogOutAction from '../store/actions/auth/LogOut'

const NavbarComponent = () => {
  const linkStyles = {
    textDecoration: 'none',
    color: 'black',
  }
  const dispatch = useDispatch()
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const stateToken = useSelector((state) => state.auth.token)
  const handleLogOut = (e) => {
    e.preventDefault()
    dispatch(LogOutAction(history))
  }
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
            <DropdownItem onClick={handleLogOut}>
              Log out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    )
  }
  let showNavBrand
  if (stateToken === null) {
    showNavBrand = (
      <Link
        style={{
          textDecoration: linkStyles.textDecoration,
          color: linkStyles.color
        }}
        to="/"
      >
        <DiIntellij />
      </Link>
    )
  } else {
    showNavBrand = (
      <Link
        style={{
          textDecoration: linkStyles.textDecoration,
          color: linkStyles.color
        }}
        to="/dashboard"
      >
        <DiIntellij />
      </Link>
    )
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          {showNavBrand}
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
