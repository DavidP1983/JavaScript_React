import './comicsPage.scss';
import Avengers_logo from '../../resources/img/Avengers_logo.png';
import Avengers from '../../resources/img/Avengers.png';
// import Xmen from '../resources/img/x-men.png';

import { useState, useEffect, useRef } from 'react';
import useMarvelServices from '../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {Link} from 'react-router-dom';



const setContent = (process, Component, newItemLoading) => {
    switch(process) {
        case 'waiting':
            return <Spinner/>;
            break;
        case 'loading':
            return newItemLoading  ? <Component/> : <Spinner/>;
            break;
        case 'confirmed':
            return <Component/>;
            break;
        case 'error': 
            return <ErrorMessage/>;
        default:
            throw new Error('Unexpected process state');
    }
}


const ComicsPage = () => {

    const [comicsChar, setComicsChar] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [charEnded, setCharEnded] = useState(false);
    const [offset, setOffset] = useState(210);


    const { error, getAllComics,  process, setProcess } = useMarvelServices();

    useEffect(() => {
        updateComics(offset, true);
    }, []);

    const updateComics = (offset, initial) => {
        // setNewItemLoading(true);
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
        .then(onComicsLoaded)
        .then(() => setProcess('confirmed'))
        .finally(() => setNewItemLoading(false));
    } 

    const onComicsLoaded = (newComicsChar) => {
        let ended = false;
        if(newComicsChar.length < 8) {
            ended = true;
        }
        setComicsChar(comicsChar => [...comicsChar, ...newComicsChar]);
        setOffset(offset => offset + 8);
        setCharEnded(ended);
    }

    const myRef = useRef([]);
    
    const setRef = (refAdd, refRemove ) => {

        hideElem(refRemove);
        showElem(refAdd);

    }

    const showElem = (ref) => ref.classList.add('selected');
    const hideElem = (ref) => ref.map(item => item.classList.remove('selected'));

    const renderComicsList = (items) => {
        const list = items.map((item, i) => {
            const {comicsId, title, comicsThumbnail, price} = item;
            const noPprice = price === 0 ? 'price not available' : `${price}$`;
            const style = price === 0 ? {'width': '120px', 'color' : 'red'} : null;
            return ( 
               <li tabIndex={0} 
               className="comics_item" 
               key={i} 
               ref={elem => myRef.current[i] = elem} 
               onClick={() => setRef(myRef.current[i], myRef.current)}
               onFocus={() => setRef(myRef.current[i], myRef.current)}>
                <Link to={`/comics/${comicsId}`}>
                    <img src={comicsThumbnail} alt={title} />
                   <div className='comics_name'>{title}</div>
                   <div className='comics_price' style={style}>{noPprice}</div>
                </Link>
                   {/* <img src={comicsThumbnail} alt={title} />
                   <div className='comics_name'>{title}</div>
                   <div className='comics_price' style={style}>{noPprice}</div> */}
               </li>
            )
        });

        return (
            <ul className='comics_grid'>
                {list}
            </ul>
        )
    }

    
    // const comicsList = renderComicsList(comicsChar);
    // const errorMessage = error ? <ErrorMessage/> : null;
    // const spinner = newItemLoading && !charEnded  ? <Spinner/> : null;

    return (
        <div className='comics'>
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
            <div className='comics_list'>
                {/* {spinner}
                {errorMessage}
                {comicsList} */}

                {setContent(process, () => renderComicsList(comicsChar), newItemLoading)}

                {/* <ul className='comics_grid'>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item selected'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                    <li className='comics_item'>
                        <img src={Xmen} alt="Xmen" />
                        <div className='comics_name'>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className='comics_price'>9.99$</div>
                    </li>
                </ul> */}
                <button className="button button__main button__long"
                        disabled={newItemLoading}
                        style={{'display' : charEnded ? 'none' : 'block'}}
                        onClick={() => updateComics(offset)}>
                    <div className="inner">load more</div>
                </button>

            </div>
        </div>
    )
}

export default ComicsPage;