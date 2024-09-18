import { CssBaseline } from '@mui/material';
import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CssBaseline/>
      <App />
    </BrowserRouter>
  </Provider>
  
);
