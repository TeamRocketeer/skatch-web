import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Grid, Icon,
} from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import styles from './mainPage.module.css';
import { roomState } from '../../atom/room';
import SetPlayerInfo from '../../components/setPlayerInfo/setPlayerInfo';

const MainPage = () => {
  const history = useHistory();
  const [room, setRoom] = useRecoilState(roomState);

  // const goToPrivateRoom = () => {
  //   history.push('/users/private');
  //   console.log('초대받은 링크로 방을 접속함~');
  // };

  const handleCreateRoom = () => {
    history.push('/users/play');
    console.log('새로운 방 생성됨');
  };
  const handleRandomPlay = () => {
    history.push('/users/random');
    console.log('랜덤 플레이 입장했음~');
  };
  const handleLogin = () => {
    history.push('/playerCard/login');
  };
  return (
    <div className={styles.main}>
      <Grid.Column style={{
        maxWidth: '50rem',
        width: '40rem',
        backgroundColor: 'whitesmoke',
        padding: '2rem',
        margin: '1rem',
      }}
      >
        <SetPlayerInfo />
        {room ? null
          : (
            <div className={styles.buttons}>
              <Button animated color="teal" type="button" className={styles.button} onClick={() => setRoom('1CY7Q')}>
                <Button.Content visible>초대받은 링크로 입장</Button.Content>
                <Button.Content hidden>
                  <Icon style={{ marginBottom: '1rem' }} size="large" name="mail" />
                </Button.Content>
              </Button>
              <Button
                animated="vertical"
                color="grey"
                type="button"
                className={styles.button}
                onClick={handleCreateRoom}
              >
                <Button.Content visible>방 만들기</Button.Content>
                <Button.Content hidden verticalAlign="middle">
                  <Icon style={{ marginBottom: '1rem' }} size="large" name="home" />
                </Button.Content>
              </Button>
              <Button animated color="teal" type="button" className={styles.button} onClick={handleRandomPlay}>
                <Button.Content visible>랜덤 플레이하기</Button.Content>
                <Button.Content hidden>
                  <Icon style={{ marginBottom: '1rem' }} size="large" name="random" />
                </Button.Content>
              </Button>
            </div>
          )}
      </Grid.Column>
      <Button type="button" className={styles.login} onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default MainPage;
