import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './components/App/App';
import './scss/main.scss';
import store from './redux/state';
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
