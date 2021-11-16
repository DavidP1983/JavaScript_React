import { Container, Row, Col } from "react-bootstrap";
import img from '../product-description/girl.jpg';
import img2 from '../product-description/Beans-logo.png';

import './product-description.css';

const ProductDescription = () => {
    return (
        <header className="page-header">
            <Container>
                <Row>
                    <Col md={6} className="text-center "><img src={img} alt="girl" className="img-fluid about-img" /></Col>
                    <Col md={6}>
                        <h1 className="text-center mt-4 ">About our beans</h1>
                        <div className="text-center mb-4"><img src={img2} alt="beans-log" /></div>
                        <p className="description">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />

                            Afraid at highly months do things on at. Situation recommend objection do intention<br />
                            so questions.<br />
                            As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>

                    </Col>
                </Row>
                <Row>
                    <Col sm={{offset: 3}} lg={{offset: 5}} md={{offset: 5}} xs={{offset:3}} className="mt-0">
                        <div className="line"></div>    
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
export default ProductDescription;