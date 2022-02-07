import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import VideoContextProvider from './context/VideoContext';
import AuthContextProvider from './context/AuthContext';
import ToastContextProvider from './context/ToastContext';

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <AuthContextProvider>
        <VideoContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </VideoContextProvider>
      </AuthContextProvider>
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

