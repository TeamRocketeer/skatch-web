import React, { useState } from 'react';
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
import PlayRoomPage from './container/PlayRoom/PlayRoomPage';
import userList from './static/dummyData';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [players, setPlayers] = useState(userList);
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <Router>

          <Switch>
            <Route exact path={['/', '/playerCard/login/set']}>
              <MainPage
                players={players}
              />
            </Route>
            <Route exact path="/playerCard/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path={['/users/single', '/users/private']}>
              <WaitingRoomPage />
            </Route>
            <Route path={['/users/play']}>
              <PlayRoomPage players={players} />
            </Route>
          </Switch>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
