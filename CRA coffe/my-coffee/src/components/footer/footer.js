import { Container, Row, Col } from "react-bootstrap";
import './footer.css';

import beans from './beans.png';
import logo from './Beans -logo-2.png';


const Footer = () => {
    return (
        <footer className="text-center main-footer">
            <Container>
                <Row className="py-5 justify-content-md-center">
                    <Col xs lg="2">
                     <a href="#home" className="brand"><img src={beans} alt="coffeBeans" className="img-fluid"/>Coffee House</a>   
                    </Col>
                    <Col md="auto">
                     <a href="#home" className="brand">Our coffee</a>   
                    </Col>
                    <Col xs lg="2">
                     <a href="#home" className="brand">For your pleasure</a>   
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col>
                     <img src={logo} alt="benas-logo"/>  
                    </Col>
                    </Row>
            </Container>
        </footer>
    )
}

export default Footer;