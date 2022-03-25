// import { Component } from 'react';
// import PropTypes  from 'prop-types';

// import MarvelServices from '../services/MarvelServices';
// import Spinner from '../spinner/Spinner';
// import ErrorMessage from '../errorMessage/ErrorMessage';
// import Skeleton from '../skeleton/Skeleton';

// import './charinfo.scss';
// // import thor from '../../resources/img/thor.jpeg';

// class CharInfo extends Component {

//     state = {
//         char: null,
//         loading: false,
//         error: false
//     }

//     marvelService = new MarvelServices();


//     componentDidMount() {
//         this.updateChar();
//     }

//     componentDidUpdate(prevProps) {
//         if(this.props.charId !== prevProps.charId){
//             this.updateChar();
//         }
//     }

//     updateChar = () => {
//         const{charId} = this.props;
//         if(!charId) {
//             return;
//         }

//         this.onCharLoading();

//         this.marvelService
//         .getCharacter(charId)
//         .then(this.onCharLoaded)
//         .catch(this.onError)

//         // this.foo.bar = 0;
//     }

//     onCharLoaded = (char) => {
//         this.setState({char, loading: false})
//     }

//     onError = () => {
//         this.setState({error: true, loading: false})    
//     }

//     onCharLoading = () => {
//         this.setState({loading: true})
//     }



//     render() {
//         const {char,loading,error} = this.state;

//         const skeleton = char || loading || error ? null : <Skeleton/>;
//         const errorMessage = error ? <ErrorMessage/> : null;
//         const spinner = loading ? <Spinner/> : null;
//         const content = !(loading || error || !char) ? <View char={char}/> : null;

//         return (
//         <div className="char__info">

//             {skeleton}
//             {errorMessage}
//             {spinner}
//             {content}

//         </div>
//     )
//     }

// }

// const View = ({char}) => {
//     const {name, description, thumbnail, homepage, wiki, comics} = char;

//     let imgStyle = {'objectFit' : 'cover'}
//     if(thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
//         imgStyle = {'objectFit' : 'contain'}
//     }
//     return (
//         <>
//         <div className="char__basics">
//                 <img src={thumbnail} alt={name} style={imgStyle}/>
//                 <div>
//                     <div className="char__info-name">{name}</div>
//                     <div className="char__btns">
//                         <a href={homepage} className="button button__main">
//                             <div className="inner">homepage</div>
//                         </a>
//                         <a href={wiki} className="button button__secondary">
//                             <div className="inner">Wiki</div>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="char__descr">
//                     {description}            
//            </div>
//             <div className="char__comics">Comics:</div>
//             <ul className="char__comics-list">

//               {comics.length > 0 ? null : <p><strong>Sorry comics not available</strong></p>}  

//                 {
//                     comics.map((item,i) => {
//                         if(i > 9) return;
//                         return (
//                         <li className="char__comics-item" key={i}>
//                             {item.name}
//                         </li> 
//                         )
//                     })
//                 }

//             </ul>
//         </>
//     )
// }



// CharInfo.propTypes = {
//     charId: PropTypes.number
// }



// export default CharInfo;



//-----Rewritering our App on Hooks-----//

import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import {easings} from 'react-animation';
import PropTypes from 'prop-types';

import useMarvelServices from '../services/MarvelServices';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';


import './charinfo.scss';
// import thor from '../../resources/img/thor.jpeg';

const CharInfo = ({ charId }) => {

    
    const [char, setChar] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);


    const { error, loading, getCharacter, clearError } = useMarvelServices();

    useEffect(() => {
        updateChar();
    }, [charId]);


    const updateChar = () => {
        if (!charId) {
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
        // this.foo.bar = 0;
    }

    const onCharLoaded = (char) => {
        setChar(char);

    }



    const skeleton = char || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
        <div className="char__info">

            {skeleton}
            {errorMessage}
            {spinner}
            {content}

        </div>
    )
}



const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;

    const style = {
        animation: `fade-in ${easings.easeInQuart} 700ms `
    }


    let imgStyle = { 'objectFit': 'cover' }
    if (thumbnail === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        imgStyle = { 'objectFit': 'contain' }
    }
    return (
       
        <div  style={style}>

            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
           
            <ul className="char__comics-list">

                {comics.length > 0 ? null : <p><strong>Sorry comics not available</strong></p>}

                {
                    comics.map((item, i) => {
                        let comicsFromCharInfo = item.resourceURI.replace(/\D/g, '').slice(1);
                        if (i > 9) return;
                        return (
                            <li className="char__comics-item" key={i}>
                        <Link to = {`/comics/${comicsFromCharInfo}`}>
                                {item.name}
                         </Link>
                        </li>
                       )
                    })
                }

            </ul>
        </div>
    )
}



CharInfo.propTypes = {
    charId: PropTypes.number
}



export default CharInfo;