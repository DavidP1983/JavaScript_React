import { Component } from 'react';
// import { HideUntilLoaded } from 'react-animation';
import PropTypes  from 'prop-types';


import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelServices from '../services/MarvelServices';

import './charlist.scss';


class CharList extends Component {

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 1548,
        charEnded: false
    }

    marvelService = new MarvelServices();

    componentDidMount() {
        if(this.state.offset < 1559){
        this.updateChar();
        }
        window.addEventListener('scroll', this.handleScroll);

    }

 componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        console.log('umount');
 }
   
 
handleScroll = () => {
    if(this.state.newItemLoading) return;
    if(this.state.charEnded) {
        window.removeEventListener('scroll', this.handleScroll);
      console.log('unmount');
    }
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        this.onCharListLoading();
        this.updateChar(this.state.offset);
        
    }
    
   
}
    
    
    updateChar = (offset) => {

        this.onCharListLoading();

        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    //loading new items button disable
    onCharListLoading = () => {
        this.setState({newItemLoading: true})
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if(newCharList.length < 9) {
            ended = true;
        }

        this.setState(({offset,charList}) => ({
            charList:[...charList, ...newCharList],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }
    

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    // Этот метод создан для оптимизации, 
    // чтобы не помещать такую конструкцию в метод render
    renderItems(arr) {
        const items = arr.map((item) => {
            let imgStyle = { 'objectFit': 'cover' };
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = { 'objectFit': 'unset' };
            }
           
            return (
                // <HideUntilLoaded  key={item.id} animationIn="bounceIn" durationOut={2000}>
                <li 
                    className="char__item"
                    key={item.id}
                    onClick={() => this.props.onCharSelected(item.id)}>
                    <img src={item.thumbnail} alt={item.name} style={imgStyle} />
                    <div className="char__name">{item.name}</div>
                </li>
                // </HideUntilLoaded>
                
            )
        });

        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
           
            <ul className="char__grid">
                    {items}
            </ul>
        )
    }



    render() {

        const { charList, loading, error, newItemLoading, offset, charEnded } = this.state;

        const items = this.renderItems(charList);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;

        // let name = charEnded ? 'There are no items to load' : 'load more';
        // const styleField = {
        //     'minWidth': '300px',
        //     'color': 'white',
        //     'filter': 'grayscale(.5)'
        // }

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                 {/* <button className="button button__main button__long"
                        disabled={newItemLoading}
                        style={{'display': charEnded ? 'none' : 'block'}}
                        // style={charEnded ? styleField : null}
                        onClick={() => this.updateChar(offset)}>
                    <div className="inner">{name}</div>
                </button>   */}
            
                
            </div>
        )
    }
 
}

CharList.propTypes = {
    onCharSelected:  PropTypes.func.isRequired
}

export default CharList;