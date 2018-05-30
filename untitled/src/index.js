import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import problemStore from './stores/problemStore'

import { Provider } from 'mobx-react'

const stores = {
    problemStore
}

ReactDOM.render(
    <Provider {...stores}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();



























