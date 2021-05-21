import React from 'react';
import styles from './chat.module.css';

const Chat = () => (
  <div className={styles.chat}>
    <div>(채팅상자)</div>
    <div>주뀨 : Hi</div>
    <div>주뀨 : 빨리 게임하자~~</div>
    <div>주투니 : shut up</div>
    <div>주투니 : go ahead</div>
    <div>주텩이 : 레디박으셈</div>
    <div>보스 : 시작 안하면 뒤진다</div>
    <div>보스 : 레디 안한새기 나와 </div>
    <div>주껴리 : ㅡㅡ</div>
    <div>주뀨 : ㅋㅋㅋㅋㅋ</div>
    <div>주투니 : 개오바지</div>
    <input className={styles.message} type="text" placeholder="메세지를 입력하세요" />
    <button type="button">보내기</button>
  </div>
);

export default Chat;
