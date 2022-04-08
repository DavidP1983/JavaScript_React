// import React,{ Component } from 'react';
// // import { HideUntilLoaded } from 'react-animation';
// import PropTypes  from 'prop-types';


// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
// import MarvelServices from '../services/MarvelServices';

// import './charlist.scss';


// class CharList extends Component {

//     state = {
//         charList: [],
//         loading: true,
//         error: false,
//         newItemLoading: false,
//         offset: 1548,
//         charEnded: false,

//     }

//     marvelService = new MarvelServices();



//     componentDidMount() {
//         if(this.state.offset < 1559){
//         this.updateChar();
//         }
//         window.addEventListener('scroll', this.handleScroll);


//     }

//  componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScroll);
//         console.log('umount');
//  }


// handleScroll = () => {
//     if(this.state.newItemLoading) return;
//     if(this.state.charEnded) {
//         window.removeEventListener('scroll', this.handleScroll);
//       console.log('unmount');
//     }
//     if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
//         this.onCharListLoading();
//         this.updateChar(this.state.offset);

//     }


// }


//     updateChar = (offset) => {

//         this.onCharListLoading();

//         this.marvelService.getAllCharacters(offset)
//             .then(this.onCharListLoaded)
//             .catch(this.onError)
//     }

//     //loading new items button disable
//     onCharListLoading = () => {
//         this.setState({newItemLoading: true})
//     }

//     onCharListLoaded = (newCharList) => {
//         let ended = false;
//         if(newCharList.length < 9) {
//             ended = true;
//         }

//         this.setState(({offset,charList}) => ({
//             charList:[...charList, ...newCharList],
//             loading: false,
//             newItemLoading: false,
//             offset: offset + 9,
//             charEnded: ended
//         }))
//     }


//     onError = () => {
//         this.setState({
//             error: true,
//             loading: false
//         })
//     }

//     myRefs = [];
//     mySecondref = [];
//     setRef = elem => {
//         this.myRefs.push(elem);
//         this.mySecondref.push(elem);
//     }



//     // Этот метод создан для оптимизации, 
//     // чтобы не помещать такую конструкцию в метод render
//     renderItems(arr) {
//         const items = arr.map((item,i) => {
//             let imgStyle = { 'objectFit': 'cover' };
//             if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
//                 imgStyle = { 'objectFit': 'unset' };
//             }

//             return (
//                 // <HideUntilLoaded  key={item.id} animationIn="bounceIn" durationOut={2000}>
//                 <li tabIndex={0}
//                     ref={this.setRef}
//                     className="char__item"
//                     key={item.id}
//                     onClick={() => this.props.onCharSelected(item.id, this.myRefs[i], this.mySecondref)}
//                     onFocus={() => this.props.onCharSelected(item.id, this.myRefs[i], this.mySecondref)}>
//                     <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
//                     <div className="char__name">{item.name}</div>
//                 </li>
//                 // </HideUntilLoaded>

//             )
//         });

//         // А эта конструкция вынесена для центровки спиннера/ошибки
//         return (

//             <ul  className="char__grid">
//                     {items}
//             </ul>
//         )
//     }



//     render() {

//         const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;

//         const items = this.renderItems(charList);

//         const errorMessage = error ? <ErrorMessage /> : null;
//         const spinner = loading ? <Spinner /> : null;
//         const content = !(loading || error) ? items : null;

//         // let name = charEnded ? 'There are no items to load' : 'load more';
//         // const styleField = {
//         //     'minWidth': '300px',
//         //     'color': 'white',
//         //     'filter': 'grayscale(.5)'
//         // }

//         return (
//             <div  className="char__list">
//                 {errorMessage}
//                 {spinner}
//                 {content}
//                  {/* <button className="button button__main button__long"
//                         disabled={newItemLoading}
//                         style={{'display': charEnded ? 'none' : 'block'}}
//                         // style={charEnded ? styleField : null}
//                         onClick={() => this.updateChar(offset)}>
//                     <div className="inner">{name}</div>
//                 </button>   */}


//             </div>
//         )
//     }

// }

// CharList.propTypes = {
//     onCharSelected:  PropTypes.func.isRequired
// }

// export default CharList;



//-----Rewritering our App on Hooks-----//



import { useState, useEffect, useRef } from 'react';
import { easings } from 'react-animation';
import PropTypes from 'prop-types';


import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelServices from '../services/MarvelServices';


import './charlist.scss';
import 'react-animation/dist/keyframes.css';


const setContent = (process, newItemLoading, charEnded) => {
    switch (process) {
        case 'waiting':
            return <Spinner />;
        case 'loading':
            return newItemLoading && !charEnded ? <Spinner /> : null ;
        case 'confirmed':
            return null;
        case 'error':
            return <ErrorMessage />;
        default:
            throw new Error('Unexpected process state');
    }
}



const CharList = (props) => {

    const [charList, setCharList] = useState([]);

    const [newItemLoading, setNewItemLoading] = useState(true);
    const [offset, setOffset] = useState(1540);
    const [charEnded, setCharEnded] = useState(false);

    const { /*error,*/ getAllCharacters, process, setProcess } = useMarvelServices();




    useEffect(() => {
        console.log('effect');
        if (newItemLoading && !charEnded) {
            updateChar(offset);
            // updateChar(offset, true); with click button
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newItemLoading]);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            console.log('unmount');
            window.removeEventListener('scroll', handleScroll);

        }
    }, []);



    function handleScroll() {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            setNewItemLoading(true);
        }

    };


    const updateChar = (offset) => { // passing argument on click true updateChar = (offset , initial) =>
        // initial ? setNewItemLoading(false) :  setNewItemLoading(true);

        getAllCharacters(offset)
            .then(onCharListLoaded)
            .then(() => setProcess('confirmed'))
            .finally(() => setNewItemLoading(false))
    }



    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }
        setCharList(charList => [...charList, ...newCharList]);

        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);

    }

    const style = {
        animation: `pop-in ${easings.easeInQuart} 700ms `
    }



    const myRefs = useRef([]);


    // we use function declaration
    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { 'objectFit': 'cover' };
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }

            return (


                <li tabIndex={0}
                    style={style}
                    //instead of callback function setRef we will do all the stuff inside this map
                    ref={elem => myRefs.current[i] = elem}
                    className="char__item"
                    key={item.id}
                    onClick={() => props.onCharSelected(item.id, myRefs.current[i], myRefs.current)}
                    onFocus={() => props.onCharSelected(item.id, myRefs.current[i], myRefs.current)}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li>


            )
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (

            <ul className="char__grid">
                {items}
            </ul>
        )


    }


    const items = renderItems(charList);

    // const errorMessage = error ? <ErrorMessage /> : null;
    // const spinner = newItemLoading && !charEnded ? <Spinner /> : null;

    // Уже не актуально, чтоб не прыгал компонент при  подгрузки данных
    // const content = !(loading || error) ? items : null;

    // let name = charEnded ? 'There are no items to load' : 'load more';
    // const styleField = {
    //     'minWidth': '300px',
    //     'color': 'white',
    //     'filter': 'grayscale(.5)'
    // }


    return (

        <div className="char__list">
            {/* {errorMessage}
            {spinner} 
             */}
            {setContent(process, newItemLoading, charEnded)}
            {items}
            {/* <button className="button button__main button__long"
                            disabled={newItemLoading}
                            style={{'display': charEnded ? 'none' : 'block'}}
                            // style={charEnded ? styleField : null}
                            onClick={() => updateChar(offset)}>
                        <div className="inner">{name}</div>
                    </button>   */}


        </div>
    )
}



CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;

