import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './scss/main.scss';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { Provider } from 'react-redux';

let rerender = state => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

// Отрисовываем страницу в первый раз
rerender(store.getState);

// Отдаём наш rerender в state
store.subscribe(() => {
  let state = store.getState();
  rerender(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
