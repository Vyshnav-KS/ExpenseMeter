import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AuthProvider} from './components/AuthProvider';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/signup" component={SignupPage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </Switch>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
