import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import NotFound from './components/notfound/notfound';
import Dashboard from './containers/dashboard/dashboard';
import ForgetPassword from './components/forgetpassword/forgetpassword';
import UserProfile from './components/userprofile/userprofile';
import Loading from './components/UI/loading/loading';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/forget" exact component={ForgetPassword} />
          <Route path="/user" exact component={UserProfile} />
          <Route path="/loading" exact component={Loading} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
