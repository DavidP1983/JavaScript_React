import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
// import ItemList from '../itemList';
// import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';



export default class App extends Component {

    state = {
        showrandomChar: true,
        error: false,
        toggle: true,
        // selectedChar: 130,
        
    };

    componentDidCatch(){
        console.log('error');
        this.setState({error: true})
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
        const {showrandomChar, error, toggle} = this.state;
        console.log(toggle);

        if(error){
            return <ErrorMessage/>
        }

        let classNames = 'random-block rounded';
        

        if(toggle){
            classNames+= ' toggle';
        }

        const char = showrandomChar ? <RandomChar className={classNames}/> : null;
        console.log(char);

        return (
            <>
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
                    <CharacterPage/>
                    {/* <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar}/>
                        </Col>
                    </Row> */}
                </Container>
            </>
        );
    }
};



