import React from 'react';
import styles from './setForMaster.module.css';
import SetRoom from '../setRoom/setRoom';
import SetCharacter from '../setCharacter/setCharacter';

const SetForMaster = () => {
  const handleCreateRoom = (event) => {
    console.log(event);
  };
  return (
    <div className={styles.set}>
      <section className={styles.room}>
        <SetRoom />
      </section>
      <section className={styles.character}>
        <SetCharacter />
      </section>

      <button type="button" onClick={handleCreateRoom}>Create Room</button>
    </div>
  );
};

export default SetForMaster;
