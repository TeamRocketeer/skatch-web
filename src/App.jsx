import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import SignUP from './components/signUp/signUp';
import SetForMaster from './components/setForMaster/setForMaster';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path={['/', '/user/login']}>
            <Login />
          </Route>
          <Route path="/users">
            <SignUP />
          </Route>
          <Route path="/user/login/set">
            <SetForMaster />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
