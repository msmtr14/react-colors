import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import App from './App';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>,
    document.getElementById('root')
 );
