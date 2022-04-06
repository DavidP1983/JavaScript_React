import { useParams, useHistory } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
import setContent from '../../utils/setContent';


import Avengers_logo from '../../resources/img/Avengers_logo.png';
import Avengers from '../../resources/img/Avengers.png';

import './singleComic.scss';
// import xMen from '../../resources/img/x-men.png';

const withSingleComicPage = (BaseComponent, getData) => props => {
    const { Id } = useParams(); //getting id from this method 
    // let history = useHistory();   //Goback to the current page

    const [comicChar, setComicChar] = useState(null);



    useEffect(() => {
        updateComics();
    }, [Id]);

    const updateComics = () => {

        props.clearError();
        getData(Id).then(onComicsLoaded)
            .then(() => props.setProcess('confirmed'))
    }

    const onComicsLoaded = (comic) => {
        setComicChar(comic);
    }

    // const errorMessage = props.error ? <ErrorMessage /> : null;
    // const spinner = props.loading ? <Spinner /> : null;
    // const content = !(props.loading || props.error || !comicChar) ? <View char={comicChar} history={history} /> : null;
    // const contentChar = !(props.loading || props.error || !comicChar) ? <ViewChar char={comicChar} history={history} /> : null;
    const content = setContent(props.process, View, comicChar)
    const contentChar = setContent(props.process, ViewChar, comicChar)


    return <BaseComponent
        {...props}
        // errorMessage={errorMessage}
        // spinner={spinner}
        content={content}
        contentChar={contentChar}
    />

}



const SingleComic = ({ content }) => {
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
            {/* {errorMessage}
            {spinner} */}
            {content}
        </>
    )
}

const View = ({ data }) => {
    let history = useHistory();
    const { comicsThumbnail, title, description, pages, language, price } = data;
    const noPprice = price === 0 ? 'price not available' : `${price} $`;
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content={`${title} comics book`}
                    />
                    <title>{title}</title>
                    <link rel="icon" type="image/png" href="https://kids.scholastic.com/content/kids64/en/books/_jcr_content/root/responsivegrid/responsivegrid_copy_/responsivegrid_1475068491/responsivegrid_41115/image_1985417245.coreimg.100.512.png/1625685144340/brand-icon-marvel.png" />
                </Helmet>
            </HelmetProvider>

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
                <img src={comicsThumbnail} alt="title" className="single-comic__img" />
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

const SingleChar = ({ contentChar }) => {

    return (
        <>
            {/* {errorMessage}
            {spinner} */}
            {contentChar}
        </>
    )
}

const ViewChar = ({ data }) => {
    let history = useHistory();
    const { thumbnail, name, description } = data;

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <meta
                        name="description"
                        content={`${name} character discription`}
                    />
                    <title>{name}</title>
                    <link rel="icon" type="image/png" href="https://kids.scholastic.com/content/kids64/en/books/_jcr_content/root/responsivegrid/responsivegrid_copy_/responsivegrid_1475068491/responsivegrid_41115/image_1985417245.coreimg.100.512.png/1625685144340/brand-icon-marvel.png" />
                </Helmet>
            </HelmetProvider>

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
                <img src={thumbnail} alt="title" className="single-comic__img" />
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




// export default SingleComicwithData;
export default SingleComic;
export { withSingleComicPage, SingleChar };