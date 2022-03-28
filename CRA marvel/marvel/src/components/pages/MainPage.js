import { useState } from "react";
import { Prompt } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";


import decoration from '../../resources/img/vision.png';

const MainPage = () => {

    const [selectedChar, setChar] = useState(null);
    const [showRandomChar, setShow] = useState(true);


    // const [showPrompt, setShowPrompt] =  useState(true);  

    //Prevent/let now  users refreshing or leaving the page
    // useEffect(() => {
    //     window.addEventListener('beforeunload', alertUser);


    //     return () => {
    //         window.removeEventListener('beforeunload', alertUser);

    //     }
    // }, []);

    // const alertUser = (e) => {

    //     e.preventDefault();
    //     e.returnValue  =  'The changes wont be saved if you press leave';
    //       setShowPrompt(showPrompt => !showPrompt);


    // }




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
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content="Marvel information portal"
                    />
                    <title>Marvel information portal</title>
                    <link rel="icon" type="image/png" href="https://kids.scholastic.com/content/kids64/en/books/_jcr_content/root/responsivegrid/responsivegrid_copy_/responsivegrid_1475068491/responsivegrid_41115/image_1985417245.coreimg.100.512.png/1625685144340/brand-icon-marvel.png" />
                </Helmet>
            </HelmetProvider>
            <Prompt
                when={true} // showPrompt
                message="Look at the comics at this page?" />


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