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

                                                    



import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';
                               
                                        
const App  = () => {

const [selectedChar, setChar] = useState(null);
const[showRandomChar, setShow] = useState(true);

    

                                                     
 
     const toggleRandomChar = () => {
        setShow(showRandomChar => !showRandomChar);
     }
 
     
 
     const onCharSelected = (id, ref, mySecondref) => {
        
      setChar(id);
      hideClass(mySecondref);
      showClass(ref);

     }
 
 
 
    const showClass = (ref) => {
          ref.classList.add('selected');
    }
    
    const hideClass = (mySecondref) => {
     mySecondref.map(item => item.classList.remove('selected'));
    }
  
 
 
    return (
             <div className="app">
                 <AppHeader />
 
                 <main>
                     {/* <RandomChar /> */}
                     {showRandomChar ? <RandomChar /> : null}
                     <button onClick={toggleRandomChar}>Click me</button>
 
                     <div className="char__content">
 
                         <CharList onCharSelected={onCharSelected} />
 
                         <ErrorBoundary>
                             <CharInfo charId={selectedChar} />
                         </ErrorBoundary>
 
                     </div>
 
                     <img className="bg-decoration" src={decoration} alt="vision" />
 
                 </main>
             </div>
 
         )
 
     }
 
 
 
 
 export default App;
                                                        