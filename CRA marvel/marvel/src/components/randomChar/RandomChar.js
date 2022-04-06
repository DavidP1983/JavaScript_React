// import { Component } from 'react';
// import MarvelServices from '../services/MarvelServices';
// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';

// // import thor from '../../resources/img/thor.jpeg';
// import mjolnir from '../../resources/img/mjolnir.png';

// import './randomChar.scss';

// class RandomChar extends Component {
//     constructor(props) {
//         super(props);

//      console.log('constructor');
//     }
//     state = {
//         char:{},
//         loading: true,
//         error: false
//     }

//      marvelService = new MarvelServices();


//     componentDidMount() {
//         this.updateChar();
//         // this.timer = setInterval(this.updateChar, 3000);
//         console.log('mount');
//     }


//     componentWillUnmount() {
//         // clearInterval(this.timer);
//         console.log('unmount');
//     }

//     onCharLoaded = (char) => {
//         console.log('update');
//         this.setState({char, loading: false})
//     }



//     onError = () => {
//         this.setState({loading: false, error: true})
//     }

//     updateChar = () => {
//         const id = Math.floor(Math.random() * (1011400 -1011000) + 1011000);
//         this.marvelService
//         .getCharacter(id)
//         .then(this.onCharLoaded)
//         .catch(this.onError);

//     }

//     onTry = () => {
//         this.setState({loading: true})
//         this.updateChar();
//     }


//     render() {

//         console.log('redner');
//         const{char, loading, error} = this.state;


//        const errorMessage = error ? <ErrorMessage/> : null;
//        const spinner =  loading ? <Spinner/> : null;
//        const content = !(loading || error) ? <View char={char} /> : null;

//         return (
//             <div className="randomchar">

//             {/* {loading ? <Spinner/> : <View char={char}/>} */}

//             {errorMessage}
//             {spinner}
//             {content}

//                 <div className="randomchar__static">
//                     <p className="randomchar__title">
//                         Random character for today!<br />
//                         Do you want to get to know him better?
//                     </p>
//                     <p className="randomchar__title">
//                         Or choose another one
//                     </p>
//                     <button className="button button__main">
//                         <div className="inner" onClick={this.onTry}>try it</div>
//                     </button>
//                     <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
//                 </div>
//             </div>
//         )
//     }

// }


// const View = ({char}) => {

//     // const{name, description,thumbnail,homepage,wiki} = char; or this structure after dist...

//     const apiImgUpdate = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/";
//     const styleField = {
//                 width: '180px',
//                 height: '180px',
//                 objectFit: 'contain'

//             };
//     const clazz = char.thumbnail === `${apiImgUpdate}image_not_available.jpg` ? styleField : null;

//     return (
//         <div className="randomchar__block">
//         <img src={char.thumbnail} alt="Random character" style={clazz} className="randomchar__img" />
//         <div className="randomchar__info">
//             <p className="randomchar__name">{char.name}</p>
//             <p className="randomchar__descr">
//                 {char.description}
//             </p>
//             <div className="randomchar__btns">
//                 <a href={char.homepage} className="button button__main">
//                     <div className="inner">homepage</div>
//                 </a>
//                 <a href={char.wiki} className="button button__secondary">
//                     <div className="inner">Wiki</div>
//                 </a>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default RandomChar;



//  //-----Rewritering our App on Hooks-----//



import { useState, useEffect } from 'react';
import useMarvelServices from '../services/MarvelServices';
// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
import setContent from '../../utils/setContent';


// import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';

import './randomChar.scss';





const RandomChar = (props) => {

    const [char, setChar] = useState({});


    const { loading, error, getCharacter, clearError, process, setProcess } = useMarvelServices();


    useEffect(() => {
        if (Object.keys(char).length === 0 && char.constructor === Object) {
            updateChar();
        }
        console.log('mount');
    }, []);



    // useEffect(() => {
    //         const timer = setInterval(updateChar, 3000);
    //         return () => {
    //             clearInterval(timer);
    //             console.log('unmount');
    //         }
    // }, []);



    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        getCharacter(id)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharLoaded = (char) => {
        console.log('update');
        setChar(char);
    }





    const onUpdateChar = () => {
        updateChar();
    }



    // const errorMessage = error ? <ErrorMessage /> : null;
    // const spinner = loading ? <Spinner /> : null;
    // const content = !(loading || error) ? <View char={char} /> : null;

    return (
        <div className="randomchar">
            {/* {loading ? <Spinner/> : <View char={char}/>} */}

            {/* {errorMessage}
                {spinner}
                {content} */}

            {setContent(process, View, char)}

            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!
                    <br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">Or choose another one</p>
                <button className="button button__main">
                    <div className="inner" onClick={() => onUpdateChar()}>
                        try it
                    </div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    );
}




const View = ({ data }) => {

    // const{name, description,thumbnail,homepage,wiki} = char; or this structure after dist...

    const apiImgUpdate = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/";
    const styleField = {
        width: '180px',
        height: '180px',
        objectFit: 'contain'

    };
    const clazz = data.thumbnail === `${apiImgUpdate}image_not_available.jpg` ? styleField : null;

    return (
        <div className="randomchar__block">
            <img src={data.thumbnail} alt="Random character" style={clazz} className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{data.name}</p>
                <p className="randomchar__descr">
                    {data.description}
                </p>
                <div className="randomchar__btns">
                    <a href={data.homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={data.wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;
