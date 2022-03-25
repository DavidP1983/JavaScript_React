// import React,{ Component } from "react";
// import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";

// import ErrorBoundary from "../errorBoundary/ErrorBoundary";

// import decoration from '../../resources/img/vision.png';

// class App extends Component {

//     state = {
//         showRandomChar: true,
//         selectedChar: null,

//     }




//     toggleRandomChar = () => {
//         this.setState((state) => ({
//             showRandomChar: !state.showRandomChar
//         }))
//     }



//     onCharSelected = (id, ref, mySecondref) => {
//         this.setState({ selectedChar: id});
//         this.hideClass(mySecondref);
//         this.showClass(ref);
//         console.dir(ref);
//     }



//    showClass = (ref) => {
//          ref.classList.add('selected');
//    }

//    hideClass = (mySecondref) => {
//     mySecondref.map(item => item.classList.remove('selected'));
//    }


//     render() {

//         return (
//             <div className="app">
//                 <AppHeader />

//                 <main>
//                     {/* <RandomChar /> */}
//                     {this.state.showRandomChar ? <RandomChar /> : null}
//                     <button onClick={this.toggleRandomChar}>Click me</button>

//                     <div className="char__content">

//                         <CharList onCharSelected={this.onCharSelected} />

//                         <ErrorBoundary>
//                             <CharInfo charId={this.state.selectedChar} />
//                         </ErrorBoundary>

//                     </div>

//                     <img className="bg-decoration" src={decoration} alt="vision" />

//                 </main>
//             </div>

//         )

//     }


// }

// export default App;





import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import { SingleCharPage } from '../pages';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicPage = lazy(() => import('../pages/ComicPage'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));
// const SingleCharPage = lazy(() => import('../pages/SingleComicPage'));

const App = () => {

    return (
        <Router>

            <div className="app">
                <AppHeader />

                <main>
                    {/* <RandomChar /> */}
                    <Suspense fallback={<span>Loading...</span>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route exact path="/comics">
                                <ComicPage />
                            </Route>
                            <Route exact path="/comics/:Id">
                                <SingleComicPage />
                            </Route>
                            <Route exact path="/characters/:Id" >
                                <SingleCharPage />
                            </Route>
                            <Route path="*">
                                <Page404 />
                            </Route>
                        </Switch>
                    </Suspense>

                </main>
            </div>

        </Router>
    )

}




export default App;
