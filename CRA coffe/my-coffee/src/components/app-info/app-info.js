
import { Navbar, Nav } from 'react-bootstrap';
import './app-info.css';
import img from './coffee-beans.png';

const AppInfo = () => {
    return (
        <div className="app-info">
            <Navbar  className="navbar py-5 pl-5" expand="sm" >
                <Navbar.Brand href="#home" className="brand"><img src={img} alt="coffeBeans" className="img-fluid"/>Coffee House</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="nav-link">Our coffee</Nav.Link>
                        <Nav.Link href="#link" className="nav-link">For your pleasure</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <h1 className="text d-flex justify-content-end">Our Coffee</h1>
        </div>
    )
}

export default AppInfo;