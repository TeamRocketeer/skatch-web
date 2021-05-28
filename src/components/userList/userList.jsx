import React from 'react';
import { Grid } from 'semantic-ui-react';
import styles from './userList.module.css';
import User from '../user/user';

// eslint-disable-next-line react/prop-types
const UserList = ({ userList }) => (
  <section className={styles.user_list}>
    <Grid columns={3}>
      <Grid.Row>
        {
          // eslint-disable-next-line react/prop-types
          userList.map((user) => (
            <Grid.Column style={{ marginBottom: '1rem', padding: '0 1rem 0 0' }}>
              <User user={user} />
            </Grid.Column>
          ))
        }
      </Grid.Row>
    </Grid>
  </section>
);

export default UserList;
