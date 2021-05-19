import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/login';
import SignUP from './components/signUp/signUp';
import Main from './components/main/main';
import WaitingRoom from './components/waitingRoom/waitingRoom';

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path={['/', '/user/login/set']}>
            <Main />
          </Route>
          <Route exact path={['/', '/user/login']}>
            <Login />
          </Route>
          <Route path="/signup">
            <SignUP />
          </Route>
          <Route path={['/users/play', '/users/private']}>
            <WaitingRoom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
