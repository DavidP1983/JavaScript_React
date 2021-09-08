import React from 'react'

import './post-list-item.css';

const PostListItem = () => {
    return (
        <li className="app-list-item list-group-item  border-0  px-1 py-1 d-flex justify-content-between align-items-center">
            <span className="app-list-item-label">
                Hello World
            </span>
            <div className="d-flex justify-content-center">
               <button className="btn-star btn-sm  mr-1">
                   <i className="fa fa-star"></i>
                </button>
                <button className="btn-trash btn-sm  mr-1">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;