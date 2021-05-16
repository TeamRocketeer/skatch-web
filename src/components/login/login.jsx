import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.replace('/user/login/set');
  };
  const goToSignup = () => {
    history.replace('/users');
  };

  return (
    <div className={styles.login}>
      <form className={styles.login_box}>
        <div className={styles.input}>
          <input type="text" placeholder="User name" />
          <input type="password" placeholder="Password" />
        </div>
        <button type="submit" onClick={goToLogin}>Login</button>
      </form>
      <div className={styles.SignUp_Box}>
        <span>If you dont have account, please sign up</span>
        <button type="button" onClick={goToSignup}>here</button>
      </div>
    </div>
  );
};

export default Login;
