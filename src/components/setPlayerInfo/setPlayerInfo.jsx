import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const SetPlayerInfo = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input fluid label="닉네임" placeholder="꼴리는거 쓰셈" />
      <Form.Field label="캐릭터 선택" control="select">
        <option defaultValue="character">--------------------------</option>
        <option value="ryu">남규</option>
        <option value="park">성훈</option>
        <option value="hyuk">신혁</option>
        <option value="moon">보현</option>
        <option value="hank">한결</option>
      </Form.Field>
    </Form.Group>
    <Button animated="fade" style={{ marginBottom: '1rem' }}>
      <Button.Content visible verticalAlign="middle" style={{ width: '33rem' }}>이걸로 확인 버튼 ㄱㄱ</Button.Content>
      <Button.Content hidden>변경 완료!</Button.Content>
    </Button>
  </Form>
);

export default SetPlayerInfo;
