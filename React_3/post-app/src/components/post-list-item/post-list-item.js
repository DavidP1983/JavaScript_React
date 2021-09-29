import React, {Component} from 'react'

import './post-list-item.sass';


export default class PostListItem extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         important: false,
    //         like: false
    //     }
    //     this.Star = this.Star.bind(this);
    //     this.Like = this.Like.bind(this);
    // }

        // Star() {
        //     // this.setState((state) => ({
        //     //     important: !state.important
        //     // }))
            
        //     this.setState(({important}) => ({
        //         important: !important
        //     }))
        // }

        // Like() {
        //     this.setState(({like}) => ({
        //         like: !like
        //     }))
        // }

    render() {
           
        const{label,OnDelete,onToggleImportant, onToggleLike, important, like} = this.props;
        // const{important,like} = this.state;
        console.log(like);

        let classNames = 'app-list-item list-group-item  border-0  px-1 py-1  d-flex justify-content-between align-items-center';
        
        if(important) {
            // console.log(important);
            classNames+= ' important';
        }

        if(like) {
            console.log(like);
            classNames+= ' like';
        }


        return (
            <div className={classNames}>
            <span className="app-list-item-label" onClick={onToggleLike}>
                {label}
            </span>
            <div className="d-flex justify-content-center">
               <button className="btn-star btn-sm  mr-1" onClick={onToggleImportant}>
                   <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm  mr-1" onClick={OnDelete}>
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart p-1"></i>
            </div>
        </div>
        )
    }
}





