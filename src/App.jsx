import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {AuthProvider} from './auth/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PageNotFound from './pages/404';
import DashBoard from './pages/dashboard/Dashboard';
import AppBar from './components/appbar/AppBar';


function App() {

  return (
    <>
    <AuthProvider>
    <Router>
      <AppBar/>
      <Switch>
        <Route exact path="/"><HomePage/></Route>
        <Route path="/login"><LoginPage/></Route>
        <Route path="/register"><RegisterPage/></Route>
        <Route path="/dashboard"><DashBoard/></Route>
        <Route path="*"><PageNotFound/></Route>
      </Switch>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
