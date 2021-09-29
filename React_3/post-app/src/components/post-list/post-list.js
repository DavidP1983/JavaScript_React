import React from 'react'
import { ListGroup } from 'reactstrap';
import PostListItem from '../post-list-item';


import './post-list.css';

const PostList = ({posts, OnDelete,onToggleImportant, onToggleLike}) => {
    // eslint-disable-next-line array-callback-return
    const elements = posts.map((item) => {

        if(typeof item === 'object' && isEmpty(item)){
        const{id, ...itemProps} = item;

        return (
            <li key={id} className='list-group-item my-2'>
            <PostListItem {...itemProps} 
            OnDelete={() => OnDelete(id)}
            onToggleImportant={() => onToggleImportant(id)}
            onToggleLike={() => onToggleLike(id)}/>
            </li>
        )
    }
});


function isEmpty(obj){
for(let key in obj){
    return true;
  }
  return false;
}

    return (
        <ListGroup className="app-list flush">
           {elements}
        </ListGroup>
    )
}

export default PostList;