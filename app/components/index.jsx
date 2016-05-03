import React from 'react';
import ReactDOM from 'react-dom';
import {ipcRenderer} from 'electron';
import App from './main.jsx';
import './main.css';

ipcRenderer.once('init', (e, data) => {
  ReactDOM.render(<App state={data}/>, document.getElementById('app'));
});
