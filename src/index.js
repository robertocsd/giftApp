import React from 'react';

import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
import PrimerComponente from './FirstApp';

import './index.css'


const saludo = <h1>Holap</h1>;


const divRoot = document.querySelector('#root');

console.log(divRoot);

ReactDOM.render(<CounterApp value = {1} />, divRoot);
