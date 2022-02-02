import {useParams, useHistory } from 'react-router-dom';


import { useState, useEffect } from 'react';
import useMarvelServices from '../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleComic.scss';
// import xMen from '../../resources/img/x-men.png';

const SingleComic = () => {
const {comicId} = useParams(); //getting id from this method 
let history = useHistory();   //Goback to the current page


const [comicChar, setComicChar] = useState(null);


const { error, loading, getComics, clearError } = useMarvelServices();

useEffect(() => {
    updateComics();
}, [comicId])


const updateComics = () => {
  
    clearError();
    getComics(comicId).then(onComicsLoaded);
}

const onComicsLoaded = (comic) => {
    setComicChar(comic);
}

const errorMessage = error ? <ErrorMessage /> : null;
const spinner = loading ? <Spinner /> : null;
const content = !(loading || error || !comicChar) ? <View char={comicChar} history={history} /> : null;


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
    )
}

export default SingleComic;