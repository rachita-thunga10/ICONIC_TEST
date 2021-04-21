import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ReduxAsyncQueue from "redux-async-queue";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const configureStore = () => {
  // const reducer = (state = {}, action: any) => state;
  return createStore(
    rootReducer,
    applyMiddleware(thunk, ReduxAsyncQueue)
  );
};


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Route exact path="/" component={App} />

    </div>
  </Router>
</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
