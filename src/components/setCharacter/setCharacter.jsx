import React from 'react';
import styles from './setCharacter.module.css';

const SetCharacter = () => {
  const handleEditOption = (event) => {
    console.log(event);
  };
  return (
    <div className={styles.setCharacter}>
      <ul className={styles.characterList}>
        <li className={styles.character}>Character 1</li>
        <li className={styles.character}>Character 2</li>
      </ul>
      <button type="button" onClick={handleEditOption}>edit Character</button>
    </div>
  );
};

export default SetCharacter;
