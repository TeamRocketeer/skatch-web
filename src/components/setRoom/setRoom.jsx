import React from 'react';
import styles from './setRoom.module.css';

const SetRoom = () => {
  const handleEditOption = (event) => {
    console.log(event);
  };
  return (
    <div className={styles.setRoom}>
      <ul className={styles.roomList}>
        <li className={styles.round}>Round</li>
        <li className={styles.time}>Time</li>
      </ul>
      <button className={styles.edit_btn} type="button" onClick={handleEditOption}>edit</button>
    </div>
  );
};

export default SetRoom;
