import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import {loadPlayers} from './players/actions'
import App from './common/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadPlayers()); // let's fetch some players

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
