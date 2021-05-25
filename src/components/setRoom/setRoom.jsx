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
        <input
          className={styles.btn}
          type="number"
          name="round"
          min="1"
          max="5"
          value="3"
        />
        <li className={styles.time}>Time</li>
        <input
          className={styles.btn}
          type="number"
          min="10"
          name="time"
          max="100"
          value="10"
        />
      </ul>
      <button className={styles.edit_btn} type="button" onClick={handleEditOption}>edit</button>
    </div>
  );
};

export default SetRoom;
