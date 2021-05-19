import React from 'react';
import { useHistory } from 'react-router-dom';
import SetRoom from '../setRoom/setRoom';
import UserList from '../userList/userList';
import styles from './waitingRoom.module.css';
import Chat from '../chat/chat';

const WaitingRoom = () => {
  const history = useHistory();
  const userList = [
    {
      id: 0,
      character: 1,
      nickName: '성훈',
    },
    {
      id: 1,
      character: 2,
      nickName: '남규',
    },
    {
      id: 2,
      character: 3,
      nickName: '신혁',
    },
    {
      id: 3,
      character: 4,
      nickName: '보현',
    },
  ];

  const goToPlay = () => {
    history.push('/users/play');
  };

  return (
    <div className={styles.waiting_total}>
      <section className={styles.waiting_left}>
        <SetRoom />
        <UserList userList={userList} />
        <button type="button" onClick={goToPlay}>Play</button>
        <div className={styles.link}>
          <span>Invite Link</span>
          <button type="button">copy</button>
        </div>
      </section>
      <section className={styles.waiting_chat}>
        <Chat />
      </section>
    </div>
  );
};

export default WaitingRoom;
