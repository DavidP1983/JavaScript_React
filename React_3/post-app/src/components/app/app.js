import React, {Component} from 'react'

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form';

import './app.css';
// import style from './App.module.css';
import styled from 'styled-components';

const AppBlock = styled.div`
margin: 0 auto;
max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
// background-color: grey;
`
function generateId () {
return '_' + Math.random().toString(36).slice(2, 9);
}; 


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "Going to learn React",
          important: true,
          like: false,
          id: generateId(),
        },
        {
          label: "That is great",
          important: false,
          like: false,
          id: generateId(),
        },
        {
          label: "I need a break...",
          important: false,
          like: false,
          id: generateId(),
        },
      ],
      term: '',
      filter: 'all'
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onUpdateFilter = this.onUpdateFilter.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];
      console.log(newArr);
      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: generateId(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      console.log(newArr);
      return {
        data: newArr,
      };
    });
  }

    replace(id, select) {

        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            console.log(old);
            // eslint-disable-next-line default-case
            switch (select) {
                case "important": 
                case "like":
                    let newItem = { ...old, [select]: !old[select] };
                    const newArr = [
                        ...data.slice(0, index),
                        newItem,
                        ...data.slice(index + 1),
                    ];
                    return {
                        data: newArr,
                    };
                
                // case "like": {
                //     let newItem = { ...old, like: !old.like };
                //     const newArr = [
                //         ...data.slice(0, index),
                //         newItem,
                //         ...data.slice(index + 1),
                //     ];
                //     return {
                //         data: newArr,
                //     };
                // }
            }
        });
    }

  onToggleImportant(id) {
    this.replace(id, "important");
  }

  // console.log(`Important ${id}`);
  // this.setState(({data}) =>{
  //     const index = data.findIndex(elem => elem.id === id);

  //     const old = data[index];
  //     // console.log(old);
  //     const newItem = {...old, important: !old.important};

  //     const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

  //     return {
  //         data: newArr
  //     }
  // });

  onToggleLike(id) {
    this.replace(id, "like");
    // console.log(`Like ${id}`);
    // this.setState(({data}) =>{
    //     const index = data.findIndex(elem => elem.id === id);

    //     const old = data[index];
    //     // console.log(old);
    //     const newItem = {...old, like: !old.like};

    //     const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];

    //     return {
    //         data: newArr
    //     }
    // });
  }

  SearchPanel(items, term) {
    if(term.length === 0){
        return items;
    }
    return items.filter((item) => {
        return item.label.indexOf(term) > -1
    });
  }

  onFilterSelect(items, filter){
    if(filter === 'like'){
        return items.filter((item) => item.like);
    }else {
        return items;
    }
  }


  onUpdate(term) {
      this.setState({term});
  }

  onUpdateFilter(filter){
    this.setState({filter});
  }

  render() {
    const { data, term, filter } = this.state;

    const liked = data.filter((item) => item.like).length;
    const allPost = data.length;

    const visiblePost = this.onFilterSelect(this.SearchPanel(data, term), filter);

    return (
      <StyledAppBlock className="container p-3 my-5">
        <AppHeader liked={liked} allPost={allPost} />
        <div className="search-panel d-flex  my-3">
          <SearchPanel onUpdate={this.onUpdate}/>
          <PostStatusFilter onUpdateFilter={this.onUpdateFilter} filter={filter}/>
        </div>
        <PostList
          posts={visiblePost}
          OnDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm onAdd={this.addItem} />
      </StyledAppBlock>
    );
  }
}
    
