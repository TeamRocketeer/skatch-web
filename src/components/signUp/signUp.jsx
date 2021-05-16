import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './signUP.module.css';

const SignUp = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.replace('/user/login');
  };
  return (
    <div className={styles.signUp}>
      <form className={styles.signup_box}>
        <div className={styles.input_box}>
          <input className={styles.input} type="text" placeholder="User name" />
          <input className={styles.input} type="password" placeholder="Password" />
        </div>
        <button type="submit" className={styles.input} onClick={goToLogin}>Sign Up!</button>
      </form>
    </div>
  );
};

export default SignUp;
