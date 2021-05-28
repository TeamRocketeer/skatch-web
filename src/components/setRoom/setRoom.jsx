import React from 'react';
import { Input } from 'semantic-ui-react';
import styles from './setRoom.module.css';

const SetRoom = () => (
  <>

    <div className={styles.setRoom}>
      <Input
        type="number"
        action={{ icon: 'check' }}
        label="Round"
        name="round"
        min="1"
        max="5"
        style={{
          fontSize: '1.5rem',
          height: '3em',
        }}
      />
      <Input
        type="number"
        action={{ icon: 'check' }}
        label="Time"
        name="time"
        min="30"
        max="60"
        step="10"
        style={{
          fontSize: '1.5rem',
          height: '3em',
        }}
      />
    </div>
  </>
);

export default SetRoom;
