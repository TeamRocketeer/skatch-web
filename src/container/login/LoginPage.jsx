import React from 'react';
import {
  Button, Form, Grid, Header, Icon, Message, Segment,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LoginPage = ({ handleLogin }) => {
  const history = useHistory();

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
        <Icon name="pencil" size="huge" style={{ margin: '0.5rem 0' }} />
        <Header as="h1" color="teal" textAlign="center" style={{ margin: '0', padding: '0.5rem 0' }}>
          {' '}
          Sign in Skatch here!
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

            <Button color="teal" fluid size="large" onClick={handleLogin}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          처음이신가요?
          {' '}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" onClick={handleSignUp}>회원가입</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
