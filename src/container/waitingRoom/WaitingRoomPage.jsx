import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Icon, Segment,
} from 'semantic-ui-react';
import ChatInWaitingRoom from '../../components/chatBox/InWaitingRoom/chatInWaitingRoom';
import SetRoundTime from '../../components/setRoundTime/setRoundTime';
import PlayerCardList from '../../components/playerCardList/PlayerCardList';
import styles from './waitingRoomPage.module.css';
import { userList } from '../../static/dummyData';

const WaitingRoomPage = () => {
  const history = useHistory();

  const handlePlay = (players) => {
    console.log({ userList: players });
    history.push({
      pathname: '/users/play',
      state: { userList: players },
    });
  };
  return (
    <div className={styles.waiting_total}>
      <section className={styles.waiting_left}>
        <SetRoundTime />
        <PlayerCardList userList={userList} key={userList.id} />
        <Button animated color="teal" type="button" className={styles.button} onClick={() => handlePlay(userList)}>
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
        <ChatInWaitingRoom />
      </section>
    </div>
  );
};

export default WaitingRoomPage;
