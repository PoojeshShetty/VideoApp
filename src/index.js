import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import VideoContextProvider from './context/VideoContext';

ReactDOM.render(
  <React.StrictMode>
    <VideoContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

