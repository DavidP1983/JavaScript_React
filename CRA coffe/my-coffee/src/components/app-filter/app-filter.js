import { Component } from 'react';

import { Container, Form, Col, Row } from 'react-bootstrap';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: ''
        }
    }

    onFindItem = (e) => {
      const name = e.target.value
      this.setState({
        name
      }); 
      this.props.filterData(name);
    }

    render() {
      const{name} = this.state;
      return (
    <Container className="mb-2">
      <Row>
    <Form.Label column="md" md={5} className="filter-decor">
    Lookiing for
    </Form.Label>
    <Col lg="5" md="10">
      <Form.Control size="sm" type="text" placeholder="start typing here..." onChange={this.onFindItem} value={name} autoFocus/>
    </Col>
    </Row>
    </Container>

  )
    }
  
}
export default AppFilter;