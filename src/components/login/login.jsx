import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const history = useHistory();
  const inputRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    history.push('/user/login/set');
  };
  const goToSignup = () => {
    history.push('/signup');
  };
  const handleOnChange = (event) => {
    event.preventDefault();
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.title}> Play Skatch !</h1>
      <form ref={inputRef} className={styles.login_box}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="User Id"
            name="id"
            onChange={handleOnChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
      <div className={styles.SignUp_Box}>
        <span>If you dont have account, please sign up</span>
        <button type="button" onClick={goToSignup}>here</button>
      </div>
    </div>
  );
};

export default Login;
