import React from 'react'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    return(
        <div className=" app container p-3 my-5">
            <AppHeader/>
        <div className="search-panel d-flex  my-3">
            <SearchPanel/>
            <PostStatusFilter/>
        </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}

export default App;