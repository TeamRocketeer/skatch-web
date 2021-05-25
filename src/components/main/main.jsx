import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, Grid, Icon,
} from 'semantic-ui-react';
import styles from './main.module.css';

const Main = () => {
  const history = useHistory();

  const goToPrivateRoom = () => {
    history.push('/users/private');
    console.log('초대받은 링크로 방을 접속함~');
  };

  const handleCreateRoom = () => {
    history.push('/users/play');
    console.log('새로운 방 생성됨');
  };
  const goToRandomPlay = () => {
    history.push('/users/random');
    console.log('랜덤 플레이 입장했음~');
  };
  const goToLogin = () => {
    history.push('/user/login');
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
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid label="닉네임" placeholder="꼴리는거 쓰셈" />
            <Form.Field label="캐릭터 선택" control="select">
              <option defaultValue="character">--------------------------</option>
              <option value="ryu">조뀨</option>
              <option value="park">조툰</option>
              <option value="hyuk">조텩</option>
              <option value="moon">조텬</option>
              <option value="hank">조껼</option>
            </Form.Field>
          </Form.Group>
          <Button animated="fade" style={{ marginBottom: '1rem' }}>
            <Button.Content visible verticalAlign="middle" style={{ width: '33rem' }}>이걸로 확인 버튼 ㄱㄱ</Button.Content>
            <Button.Content hidden>응 조까~</Button.Content>
          </Button>
        </Form>
        <div className={styles.buttons}>
          <Button animated color="teal" type="button" className={styles.button} onClick={goToPrivateRoom}>
            <Button.Content visible>초대받은 링크로 입장</Button.Content>
            <Button.Content hidden>
              <Icon style={{ marginBottom: '1rem' }} size="large" name="mail" />
            </Button.Content>
          </Button>
          <Button animated color="grey" type="button" className={styles.button} onClick={handleCreateRoom}>
            <Button.Content visible>방 만들기</Button.Content>
            <Button.Content hidden verticalAlign="middle">
              <Icon style={{ marginBottom: '1rem' }} size="large" name="home" />
            </Button.Content>
          </Button>
          <Button animated color="teal" type="button" className={styles.button} onClick={goToRandomPlay}>
            <Button.Content visible>랜덤 플레이하기</Button.Content>
            <Button.Content hidden>
              <Icon style={{ marginBottom: '1rem' }} size="large" name="random" />
            </Button.Content>
          </Button>
        </div>
      </Grid.Column>
      <Button type="button" className={styles.login} onClick={goToLogin}>Login</Button>
    </div>
  );
};

export default Main;
