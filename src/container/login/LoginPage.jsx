import React from 'react';
import {
  Button, Form, Grid, Header, Image, Message, Segment,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  const handlePlay = (event) => {
    console.log(event);
    history.push('/playerCard/login/set');
  };
  const handleSignUp = (event) => {
    console.log(event);
    history.push('/signup');
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
        <Image src="/images/logo.png" centered />
        <Header as="h1" color="teal" textAlign="center" style={{ margin: '0', padding: '0.5rem 0' }}>
          {' '}
          여기서 로그인해라
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input fluid icon="user" iconPosition="left" placeholder="PlayerCardComponent ID" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="teal" fluid size="large" onClick={handlePlay}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          처음이세연?
          {' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handleSignUp}>회원가입</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
