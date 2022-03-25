import {useParams, useHistory } from 'react-router-dom';


import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';


import Avengers_logo from '../../resources/img/Avengers_logo.png';
import Avengers from '../../resources/img/Avengers.png';

import './singleComic.scss';
// import xMen from '../../resources/img/x-men.png';

const withSingleComicPage = (BaseComponent, getData) => props => {
    const {Id} = useParams(); //getting id from this method 
    let history = useHistory();   //Goback to the current page

    const [comicChar, setComicChar] = useState(null);



    useEffect(() => {
        updateComics();
    }, [Id]);

    const updateComics = () => {
  
        props.clearError();
        getData(Id).then(onComicsLoaded);
    }
    
    const onComicsLoaded = (comic) => {
        setComicChar(comic);
    }

    const errorMessage = props.error ? <ErrorMessage /> : null;
    const spinner = props.loading ? <Spinner /> : null;
    const content = !(props.loading || props.error || !comicChar) ? <View char={comicChar} history={history} /> : null;
    const contentChar = !(props.loading || props.error || !comicChar) ? <ViewChar char={comicChar} history={history} /> : null;


    return  <BaseComponent
    {...props}
    errorMessage={errorMessage}
    spinner={spinner}
    content={content}
    contentChar={contentChar}
  
    />

}



const SingleComic = ({errorMessage, spinner, content}) => {
    // const {comicId} = useParams(); //getting id from this method 
    // let history = useHistory();   //Goback to the current page


    // const [comicChar, setComicChar] = useState(null);


    // const { error, loading, getComics, clearError } = useMarvelServices();
    


    // useEffect(() => {
    //     updateComics();
    // }, [comicId])


    // const updateComics = () => {
    
    //     clearError();
    //     getComics(comicId).then(onComicsLoaded);
    // }

    // const onComicsLoaded = (comic) => {
    //     setComicChar(comic);
    // }

    // const errorMessage = error ? <ErrorMessage /> : null;
    // const spinner = loading ? <Spinner /> : null;
    // const content = !(loading || error || !comicChar) ? <View char={comicChar} history={history} /> : null;


    return (
        // Для центрирования ошибки
        <>
           {errorMessage}
           {spinner}
           {content}
        </>
    )
}

const View = ({char, history}) => {
    const {comicsThumbnail, title, description, pages, language, price} = char;
    const noPprice = price === 0 ? 'price not available' : `${price} $`;
    return (
        <>
        <div className='comics_header'>
                <img src={Avengers} alt="Avengers" />
                <ul className='comics_title'>
                    <li> New comics every week!</li>
                    <li>Stay tuned!</li>
                </ul>
                <div className='comics_img_logo'>
                    <img src={Avengers_logo} alt="Avengers_logo" />
                </div>
            </div>
    <div className="single-comic">
        <img src={comicsThumbnail} alt="title" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">pages: {pages}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{noPprice}</div>
            </div>
            {/* <Link to="/" className="single-comic__back">Back to all</Link> */}
            <button className="single-comic__back" onClick={() => history.goBack()}>Back to all</button>
    </div>

    </>
    )
}

const SingleChar = ({errorMessage, spinner, contentChar}) => {
    
    return (
        // Для центрирования ошибки
        <>
           {errorMessage}
           {spinner}
           {contentChar}
        </>
    )
}

const ViewChar = ({char, history}) => {
    const { thumbnail, name, description} = char;
    
    return (
        <>
        <div className='comics_header'>
                <img src={Avengers} alt="Avengers" />
                <ul className='comics_title'>
                    <li> New comics every week!</li>
                    <li>Stay tuned!</li>
                </ul>
                <div className='comics_img_logo'>
                    <img src={Avengers_logo} alt="Avengers_logo" />
                </div>
            </div>
    <div className="single-comic">
        <img src={thumbnail} alt="title" className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
              
            </div>
            {/* <Link to="/" className="single-comic__back">Back to all</Link> */}
            <button className="single-comic__back" onClick={() => history.goBack()}>Back to all</button>
    </div>

    </>
    )
}



// const SingleComicwithData = withSingleComicPage(SingleComic);

// export default SingleComicwithData;
export default SingleComic;
export {withSingleComicPage, SingleChar};