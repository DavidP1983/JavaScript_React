import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);
    const [showRandomChar, setShow] = useState(true);





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
    <>
         {showRandomChar ? <RandomChar /> : null}
         <button onClick={toggleRandomChar}>Click me</button>

         <div className="char__content">
             <CharList onCharSelected={onCharSelected} />
             <ErrorBoundary>
                 <CharInfo charId={selectedChar} />
             </ErrorBoundary>
         </div>
         <img className="bg-decoration" src={decoration} alt="vision" />
    </>
    )
}

export default MainPage;