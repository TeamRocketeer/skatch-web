import React from 'react';
import styles from './userList.module.css';
import User from '../user/user';

const UserList = () => (
  <section className={styles.user_list}>
    <ul className={styles.userInfo}>
      <User />
    </ul>
  </section>
);

export default UserList;
