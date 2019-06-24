import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './modules/store/index';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login/login'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route component={Notfound} />
            </Switch>
          </div>
        </BrowserRouter> */}
        <Login />
      </Provider>
    );
  }
}

export default App;
