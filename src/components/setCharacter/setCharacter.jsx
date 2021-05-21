import React from 'react';
import styles from './setCharacter.module.css';

const SetCharacter = () => {
  const handleEditOption = (event) => {
    console.log(event);
  };
  return (
    <div className={styles.setCharacter}>
      <div className={styles.characterList}>
        <label htmlFor="character1">
          <input type="radio" name="character" id="character1" className={styles.character} value="캐릭터 1" />
          캐릭터1
        </label>
        <label htmlFor="character2">
          <input type="radio" name="character" id="character2" className={styles.character} value="캐릭터 2" />
          캐릭터2
        </label>
        <label htmlFor="character3">
          <input type="radio" name="character" id="character3" className={styles.character} value="캐릭터 3" />
          캐릭터3
        </label>
        <label htmlFor="character4">
          <input type="radio" name="character" id="character4" className={styles.character} value="캐릭터 4" />
          캐릭터4
        </label>
        <label htmlFor="character5">
          <input type="radio" name="character" id="character5" className={styles.character} value="캐릭터 5" />
          캐릭터5
        </label>
        <label htmlFor="character6">
          <input type="radio" name="character" id="character6" className={styles.character} value="캐릭터 6" />
          캐릭터6
        </label>
      </div>
      <button className={styles.choose} type="button" onClick={handleEditOption}>캐릭터 선택</button>
      <form className={styles.nickname}>
        <input type="text" placeholder="닉네임" />
        <button type="button" className={styles.nickname_btn}>확인</button>
      </form>
    </div>
  );
};

export default SetCharacter;
