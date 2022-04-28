import React from 'react';
//deprecated
// import  ReactDOM  from 'react-dom';
import { createRoot } from 'react-dom/client';
import {createStore, bindActionCreators} from 'redux';
import { Provider } from 'react-redux';
// import {inc, dec, rnd} from './actions';
// import * as actions from './actions';
import reducer from './reducer';

import App from './components/App';

const store = createStore(reducer);



  
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>

        <Provider store={store}>
           <App/>
        </Provider>
        
   </React.StrictMode>
)













