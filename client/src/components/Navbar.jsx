import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, Header, Icon } from 'rsuite'

const TopNavbar = () => {
    return (
        <Container>
            <Header>
                <Navbar>
                    <Navbar.Header>
                        <Nav>
                            <Nav.Item><Icon icon="google-wallet" /></Nav.Item>
                        </Nav>
                    </Navbar.Header>
                    <Navbar.Body>
                        <Nav pullRight>
                            <Link to="/">
                                <Nav.Item icon={<Icon icon="home" />}>Sign up</Nav.Item>
                            </Link>
                            <Link to="/sign-in">
                                <Nav.Item icon={<Icon icon="sign-in" />}>Sign in</Nav.Item>
                            </Link>
                            <Link to="/create">
                                <Nav.Item icon={<Icon icon="plus" />}>Add Contact</Nav.Item>
                            </Link>
                            <Link to="/dashboard">
                                <Nav.Item icon={<Icon icon="address-book-o" />}>Contacts</Nav.Item>
                            </Link>
                            <Nav.Item icon={<Icon icon="sign-out" />}>Log out</Nav.Item>
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>
        </Container>
    )
}

export default TopNavbar
