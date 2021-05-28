import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Icon, Segment,
} from 'semantic-ui-react';
import Chat from '../../components/chat/chat';
import SetRoom from '../../components/setRoom/setRoom';
import UserList from '../../components/userList/userList';
import styles from './waitingRoom.module.css';

const WaitingRoom = () => {
  const history = useHistory();
  const userList = [
    {
      id: 0,
      character: 1,
      nickName: '성훈',
      img: '/images/logo.png',
    },
    {
      id: 1,
      character: 2,
      nickName: '남규',
      img: '/images/namq.jpg',
    },
    {
      id: 2,
      character: 3,
      nickName: '신혁',
      img: '/images/hyuk.jpg',
    },
    {
      id: 3,
      character: 4,
      nickName: '보현',
      img: '/images/bose.jpg',
    },
    {
      id: 4,
      character: 5,
      nickName: '한결',
      img: '/images/gyeol.jpg',
    },
  ];

  const goToPlay = () => {
    history.push('/users/play');
  };

  return (
    <div className={styles.waiting_total}>
      <section className={styles.waiting_left}>
        <SetRoom />
        <UserList userList={userList} key={userList.id} />
        <Button animated color="teal" type="button" className={styles.button} onClick={goToPlay}>
          <Button.Content visible style={{ fontSize: '1.5rem' }}>Start Play</Button.Content>
          <Button.Content hidden style={{ height: ' 100%' }}>
            <Icon style={{ marginBottom: '0' }} size="large" name="angle double right" />
          </Button.Content>
        </Button>
        <Segment label="check" className={styles.link} style={{ paddingLeft: '1.5rem', fontSize: '1.2rem' }}>
          <span> https://skatch.io/?i5sKPba19Gj2</span>
          <Button floated="right" animated="fade" style={{ margin: 0 }}>
            <Button.Content visible verticalAlign="middle">Copy</Button.Content>
            <Button.Content hidden>
              <Icon name="check" />
            </Button.Content>
          </Button>
        </Segment>
      </section>
      <section className={styles.waiting_chat}>
        <Chat />
      </section>
    </div>
  );
};

export default WaitingRoom;
