import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import App from './common/components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
