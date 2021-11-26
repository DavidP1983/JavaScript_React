import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import MarvelServices from "../services/MarvelServices";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        char: [{}],
        showRandomChar: true,
        loading: true,
        error: false
        
    }

    toggleRandomChar = () => {
        this.setState((state) => ({
            showRandomChar: !state.showRandomChar
        }))
    }


    marvelService = new MarvelServices();

    componentDidMount() {
        this.updateChar();
    }

    onCharLoaded = (char) => {
        this.setState({char, loading: false})
    }

    updateChar = () => {
        this.marvelService
        .getAllCharacters()
        .then(this.onCharLoaded)
        .catch(this.onError)
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    render() {
        const{char, loading, error} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <CharList data={char} /> : null;

        return (
            <div className="app">
            <AppHeader />

            <main>
                {/* <RandomChar /> */}
                {this.state.showRandomChar ? <RandomChar/> : null }
                <button onClick={this.toggleRandomChar}>Click me</button>

                <div className="char__content">
                    {content}
                    {spinner}
                    {errorMessage}
                  
                    {/* <CharList data={char} /> */}
                    <CharInfo/>
                </div>
                    
                <img className="bg-decoration" src={decoration} alt="vision"/>

            </main>
        </div>
    )
    }
    
}
export default App;