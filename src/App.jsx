import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import styles from './App.module.css';
import LoginPage from './container/login/LoginPage';
import SignUpPage from './container/signUp/SignUpPage';
import MainPage from './container/main/MainPage';
import WaitingRoomPage from './container/waitingRoom/WaitingRoomPage';

function App() {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <Router>
          <Switch>
            <Route exact path={['/', '/playerCard/login/set']}>
              <MainPage />
            </Route>
            <Route exact path={['/', '/playerCard/login']}>
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path={['/users/play', '/users/private']}>
              <WaitingRoomPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
