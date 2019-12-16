import React from 'react';
import ReactDOM from 'react-dom';
import './css/11.css';
import './css/22.css';
import "./img/ship.png"
import Header from "./header/header"
import store from "./store/store"
import {Provider} from "react-redux"
import Router  from "./router/index"
ReactDOM.render( 
    <Provider store={store}> 
        <Header/>
        <Router/>
    </Provider>,
    document.getElementById('root')
)