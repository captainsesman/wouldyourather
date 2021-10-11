import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import './App.css';
import {createStore} from 'redux'
import reducers from './reducers'
import middleware from './middleware'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'



let store = createStore(reducers, middleware)


ReactDOM.render(
     <Provider store={store}>
    <App />
    </Provider>
  , document.getElementById('root'))
