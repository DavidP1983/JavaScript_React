import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import MarvelServices from "../services/MarvelServices";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        char: [{}],
        showRandomChar: true,
        loading: true,
        error: false,
        selectedChar: null
        
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



    onCharSelected = (id) => {
        this.setState({selectedChar: id})
    }


    render() {
        const{char, loading, error} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const errorMessage = error ? <ErrorMessage/> : null;
        const content = !(loading || error) ? <CharList data={char} onCharSelected={this.onCharSelected}/> : null;

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

                    <ErrorBoundary>
                    <CharInfo charId={this.state.selectedChar}/>
                    </ErrorBoundary>
                    
                </div>
                    
                <img className="bg-decoration" src={decoration} alt="vision"/>

            </main>
        </div>
    )
    }
    
}
export default App;