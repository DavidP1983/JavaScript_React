import { Component } from 'react';

import './charlist.scss';
// import abyss from '../../resources/img/abyss.jpg';

class CharList extends Component {

    

    render() {
        const {data} = this.props;
      


        const elements = data.map((item, index) => {
            const { thumbnail, name } = item;

            const apiImgUpdate = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/";
            const styleField = {
                        width: '200px',
                        height: '200px',
                        objectFit: 'unset'
            
                    };
            const clazz = thumbnail === `${apiImgUpdate}image_not_available.jpg` ? styleField : null;

            return (
                <li className="char__item" key={index}>
                    <img src={thumbnail} alt={name} style={clazz}/>
                    <div className="char__name">{name}</div>
                </li>
            )
        });

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {elements}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

}

export default CharList;


// char__item_selected