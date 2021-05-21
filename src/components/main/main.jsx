import React from 'react';
import { useHistory } from 'react-router-dom';
import SetCharacter from '../setCharacter/setCharacter';
import styles from './main.module.css';

const Main = () => {
  const history = useHistory();

  const goToPrivateRoom = () => {
    history.push('/users/private');
    console.log('초대받은 링크로 방을 접속함~');
  };

  const handleCreateRoom = () => {
    history.push('/users/new');
    console.log('새로운 방 생성됨');
  };
  const goToRandomPlay = () => {
    history.push('/users/play');
    console.log('랜덤 플레이 입장했음~');
  };
  const goToLogin = () => {
    history.push('/user/login');
  };
  return (
    <div className={styles.main}>
      <SetCharacter />
      <div className={styles.button_box}>
        <button type="button" className={styles.button} onClick={goToPrivateRoom}>초대받은 링크로 입장</button>
        <button type="button" className={styles.button} onClick={handleCreateRoom}>방 만들기</button>
        <button type="button" className={styles.button} onClick={goToRandomPlay}>랜덤 플레이 하기</button>
      </div>
      <button type="button" className={styles.login} onClick={goToLogin}>Login</button>
    </div>
  );
};

export default Main;
