import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App.jsx';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { BrowserRouter } from 'react-router-dom';
// import 'style.css';

ReactDOM.render(
<Provider store = {store}>
<BrowserRouter>
<App/>
</BrowserRouter>
</Provider>,
document.getElementById('app'));