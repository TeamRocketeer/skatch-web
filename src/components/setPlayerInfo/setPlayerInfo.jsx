import React from 'react';
import { Form } from 'semantic-ui-react';

const SetPlayerInfo = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input style={{ height: '4rem', fontSize: '1.5rem' }} fluid label="닉네임" placeholder="닉네임을 입력하세요" />
      <Form.Field style={{ height: '4rem', fontSize: '1.5rem' }} label="캐릭터 선택" control="select">
        <option defaultValue="character">--------------------------</option>
        <option value="ryu">남규</option>
        <option value="park">성훈</option>
        <option value="hyuk">신혁</option>
        <option value="moon">보현</option>
        <option value="hank">한결</option>
      </Form.Field>
    </Form.Group>
    {/* <Button animated="fade" style={{ marginBottom: '1rem', width: '100%' }}>
      <Button.Content visible verticalAlign="middle" style={{ width: '100%', fontSize: '1.5rem' }}>
      이걸로 확인 버튼 ㄱㄱ</Button.Content>
      <Button.Content style={{ fontSize: '1.2rem' }} hidden>변경 완료!</Button.Content>
    </Button> */}
  </Form>
);

export default SetPlayerInfo;
