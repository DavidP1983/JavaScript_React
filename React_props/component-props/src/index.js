import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapTest from './bootstrapTest';

import './index.css';
// import './index.scss';


import App from './App';
import {Button} from './App';

const BigButton = styled(Button)`
margin: 0 auto;
width: 245px;
background-color: blue;
text-align: center;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">Новая конпака</BigButton>
    <BootstrapTest/>
  </React.StrictMode>,
  document.getElementById('root')
);


