import React, { useState } from 'react';
import {
  Button, Grid,
} from 'semantic-ui-react';
import styles from './mainPage.module.css';
import SetPlayerInfo from '../../components/setPlayerInfo/setPlayerInfo';
import LoginPage from '../login/LoginPage';
import Buttons from '../../components/buttons/Buttons';

const MainPage = () => {
  const [popUp, setPopUp] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setPopUp(false);
    setIsLogin(true);
  };
  const handlePopUp = () => {
    setPopUp(true);
  };

  return (
    <>
      <div className={styles.main}>
        <Grid.Column style={{
          maxWidth: '70rem',
          width: '50rem',
          height: '17rem',
          backgroundColor: 'whitesmoke',
          padding: '2rem',
          margin: '1rem',
        }}
        >
          <SetPlayerInfo />
          {
            popUp ? null : (
              <Buttons />
            )
          }
        </Grid.Column>
        {
        popUp ? null
          : (
            <Button type="button" className={styles.login} onClick={handlePopUp}>Login</Button>
          )
      }
        {
        popUp ? (
          <div className={styles.popup}>
            <div className={styles.popup_inner}>
              <LoginPage
                handleLogin={handleLogin}
              />
            </div>
          </div>
        ) : null
      }
      </div>
    </>
  );
};

export default MainPage;
