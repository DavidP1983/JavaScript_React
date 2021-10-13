import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import { CharacterPage, BookPage, HousesPage, BooksItem } from '../pages';
import gotService from '../../servises/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './app.css';

export default class App extends Component {

    gotService = new gotService();

    state = {
        showrandomChar: true,
        error: false,
        toggle: true,
        // selectedChar: 130,

    };

    componentDidCatch() {
        console.log('error');
        this.setState({ error: true })
    }


    onToggleChar = () => {
        this.setState((state) => {
            return {
                showrandomChar: !state.showrandomChar,
                toggle: !state.toggle
            }
        });
    }

    // onCharSelected =(id) => {
    //     this.setState({
    //         selectedChar: id
    //     })
    // }

    render() {
        const { showrandomChar, error, toggle } = this.state;
        console.log(toggle);

        if (error) {
            return <ErrorMessage />
        }

        let classNames = 'random-block rounded';


        if (toggle) {
            classNames += ' toggle';
        }

        const char = showrandomChar ? <RandomChar className={classNames} interval={3000} /> : null;
        console.log(char);

        return (
            <Router>
                <div className='app'>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {char}
                            <Button className="my-5 font-weight-light btn" size="lg" color='info' type='button' onClick={this.onToggleChar}>Toggle random character</Button>
                        </Col>
                    </Row>

                    <Route path='/characters' component={CharacterPage}/>
                    {/* <Route path='/books' component={BookPage}/> */}
                    <Route path='/houses' component={HousesPage}/>
                    <Route path='/books' exact component={BookPage}/>
                    {/* <Route path='/books/:id' component={}/> */}
                    <Route path='/books/:id' render={
                        ({match}) => {
                           const {id} = match.params;
                        return <BooksItem bookId={id}/>}
                    }/>


                    {/* <CharacterPage />

                    <BookPage />

                    <HousesPage /> */}

                </Container>
            </div>
            </Router>
            
        );
    }
};



