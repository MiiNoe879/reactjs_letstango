import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import thunk from 'redux-thunk';

import reducers from "./reducers";
import Homepage from "./containers/homepage";
import Catalogpage from "./containers/catalogpage";
import LoginPage from "./containers/loginpage"
import RegisterPage from "./containers/registerpage"
import CartPage from "./containers/cartpage"

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route component={Catalogpage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("wraper")
);
