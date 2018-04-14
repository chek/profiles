import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store_modules/store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter  basename="" >
            <App />
        </HashRouter>
    </Provider>,
    document.querySelector('#root')
)
registerServiceWorker();
