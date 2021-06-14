import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styles from './buttons.module.css';

const Buttons = () => {
  const history = useHistory();

  const handleGoPrivateRoom = () => {
    history.push('/users/private');
    console.log('초대받은 링크로 방을 접속함~');
  };

  const handleCreateRoom = () => {
    history.push('/users/single');
    console.log('새로운 방 생성됨');
  };
  const handlePlayRandom = () => {
    history.push('/users/random');
    console.log('랜덤 플레이 입장했음~');
  };
  return (

    <div className={styles.buttons}>
      <Button animated color="teal" type="button" className={styles.button} onClick={handleGoPrivateRoom}>
        <Button.Content style={{ fontSize: '1.3rem' }} visible>초대받은 링크로 입장</Button.Content>
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
        <Button.Content style={{ fontSize: '1.3rem' }} visible>방 만들기</Button.Content>
        <Button.Content hidden verticalAlign="middle">
          <Icon style={{ marginBottom: '1rem' }} size="large" name="home" />
        </Button.Content>
      </Button>
      <Button animated color="teal" type="button" className={styles.button} onClick={handlePlayRandom}>
        <Button.Content style={{ fontSize: '1.3rem' }} visible>랜덤 플레이하기</Button.Content>
        <Button.Content hidden>
          <Icon style={{ marginBottom: '1rem' }} size="large" name="random" />
        </Button.Content>
      </Button>
    </div>
  );
};

export default Buttons;
