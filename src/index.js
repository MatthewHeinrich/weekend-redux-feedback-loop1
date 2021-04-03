import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import { applyMiddleware, combineReducers, createStore } from 'redux';


const feedbackData = (state=[], action) =>{
    if(action.type === 'feedback'){
        console.log('in feedback reducer', action.payload);
        return [...state, action.payload];
    }
    
    return state;
}

const store = createStore(
    combineReducers({
        feedbackData: feedbackData
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
