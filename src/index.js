import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import AlertComponent from './components/alert-component';

const App = () => <AlertComponent/>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
