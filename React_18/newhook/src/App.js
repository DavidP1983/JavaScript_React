import data from './data';
import { useState, useMemo, useDeferredValue, useTransition } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [posts, setPosts] = useState(data);

  // const deferredValue = useDeferredValue(text);

  const [isPending, startTransition] = useTransition();

  const filteredPosts = useMemo(() => {
    return posts.filter(item => item.name.toLowerCase().includes(/*deferredValue*/ text));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[/*deferredValue*/ text]);



  // const  onValueChange = (e) => {
  //   setText(e.target.value);
  // }


    const  onValueChange = (e) => {
      startTransition(() => {
         setText(e.target.value);
      })
   
  }


  return (
    <>
    <div>
      <input type="text" value={text} onChange={onValueChange} />

{/* 
      {
        filteredPosts.map(post => (
          <div key={post._id}>
            <h4>{post.name}</h4>
          </div>
        ))
      } */}


      {isPending ? <h4>Loading...</h4> :
      
     
        filteredPosts.map(post => (
          <div key={post._id}>
            <h4>{post.name}</h4>
          </div>
        ))
      }

    </div>
    </>
  )

}

export default App;
