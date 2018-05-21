import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import App from './common/components/App';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {loadPlayers} from "./players/actions";

const store = configureStore();

store.dispatch(loadPlayers());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
