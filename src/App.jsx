import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styles from './App.module.css';
import Login from './container/login/login';
import SignUP from './container/signUp/signUp';
import Main from './container/main/main';
import WaitingRoom from './container/waitingRoom/waitingRoom';

function App() {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
}

export default App;
