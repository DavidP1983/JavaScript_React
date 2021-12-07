import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

class App extends Component {

    state = {
        showRandomChar: true,
        selectedChar: null,

    }

    toggleRandomChar = () => {
        this.setState((state) => ({
            showRandomChar: !state.showRandomChar
        }))
    }


    onCharSelected = (id) => {
        this.setState({ selectedChar: id })
    }


    render() {

        return (
            <div className="app">
                <AppHeader />

                <main>
                    {/* <RandomChar /> */}
                    {this.state.showRandomChar ? <RandomChar /> : null}
                    <button onClick={this.toggleRandomChar}>Click me</button>

                    <div className="char__content">

                        <CharList onCharSelected={this.onCharSelected} />

                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundary>

                    </div>

                    <img className="bg-decoration" src={decoration} alt="vision" />

                </main>
            </div>

        )

    }


}

export default App;