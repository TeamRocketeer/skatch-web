import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, Grid, Header, Message, Segment,
} from 'semantic-ui-react';

const SignUp = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.replace('/user/login');
  };
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{
        maxWidth: '50rem',
        width: '30rem',
        backgroundColor: 'whitesmoke',
        padding: 0,
        margin: '1rem',
      }}
      >
        <Header as="h1" color="teal" textAlign="center" style={{ margin: '0', padding: '0.5rem 0' }}>
          {' '}
          여기서 회원가입해라
        </Header>
        <Form success size="large">
          <Segment stacked>

            <Form.Input required icon="user" iconPosition="left" placeholder="User ID" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Form.Input
              fluid
              icon="check "
              iconPosition="left"
              placeholder="Confirm Password"
              type="password"
            />
            <Button color="teal" fluid size="large">
              Submit
            </Button>
          </Segment>
        </Form>

        <Message>
          이미 아이디 있으세연?
          {' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={goToLogin}>로그인</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default SignUp;
