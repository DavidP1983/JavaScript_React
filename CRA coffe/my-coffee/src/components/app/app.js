import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import ProductDescription from '../product-description/product-description';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import CoffeeList from '../coffe-list/coffee-list';
import Footer from '../footer/footer';

import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col } from "react-bootstrap";

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coffeeShop: [
                { name: "Brazil", price: 16.99, like: false, id: uuidv4().slice(0, 9) },
                { name: "Kenya", price: 6.99, like: false, id: uuidv4().slice(0, 9) },
                { name: "Columbia", price: 18.99, like: false, id: uuidv4().slice(0, 9) },
                { name: "Brazil", price: 22.99, like: false, id: uuidv4().slice(0, 9) },
                { name: "Brazil", price: 12.99, like: false, id: uuidv4().slice(0, 9) },
                { name: "Brazil", price: 21.99, like: false, id: uuidv4().slice(0, 9) },
            ],
            filter: '',
            countries: 'All'

        }
    }

    onToggle = (id, prop) => {
      this.setState(({coffeeShop}) => ({
          coffeeShop: coffeeShop.map(item => {
              if(item.id === id) {
                  return {...item, [prop]:!item[prop]}
              } 
              return item;
          })
      }))
    }

    filterData = (filterValue) => {
        this.setState({
            filter: filterValue
        })
    }

filterSearch = (data, filter) => {
    if(filter.length === 0){
        return data;
    }
    const items = data.filter((item) => item.name.indexOf(filter) > -1);
    return items;
}

onUpdateButton = (name) => {
this.setState({
    countries: name
})
}

updateProduct = (data, countries) => {
    switch(countries){
        case 'Brazil':
            return data.filter(item => item.name === 'Brazil');
        case 'Kenya':
            return data.filter(item => item.name === 'Kenya');
        case 'Columbia':
            return data.filter(item => item.name === 'Columbia');
            default:
                return data;
    }
}

    render() {
        const { coffeeShop,filter,countries } = this.state;
        const filterSearch = this.updateProduct(this.filterSearch(coffeeShop, filter ),countries);
        return (
            <div className="app">
                <AppInfo />
                <ProductDescription />

                <Container className="search-panel">

                    <Row>
                        <Col md={6}><AppFilter filterData={this.filterData}/></Col>
                        <Col md={6}><SearchPanel activeButton={countries} onUpdateButton={this.onUpdateButton}/></Col>
                    </Row>

                </Container>

                <CoffeeList data={filterSearch} onToggle={this.onToggle} />
                
                <Footer />
            </div>

        )
    }


}

export default App;