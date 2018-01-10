import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from './reducers';


const logger = createLogger();
const middleware = applyMiddleware(logger);





ReactDOM.render(<Provider store={createStore(reducers, middleware)}>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
