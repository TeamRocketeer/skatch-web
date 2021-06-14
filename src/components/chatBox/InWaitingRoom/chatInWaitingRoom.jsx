import React, { useState, useRef } from 'react';
import {
  Input, Header,
} from 'semantic-ui-react';
import styles from './chatInWaitingRoom.module.css';

import MessageList from '../../messageList/messageList';
import { dummyChats } from '../../../static/dummyData';
// eslint-disable-next-line import/extensions,import/no-absolute-path

const ChatInWaitingRoom = () => {
  const [messageList, setMessageList] = useState(dummyChats);
  const inputRef = useRef();

  const [message, setMessage] = useState('');
  const handleSendMessage = (event) => {
    event.preventDefault();
    const newMessageList = [...messageList, {
      id: Date.now(),
      nickName: '성훈',
      img: '/images/logo.png',
      text: message,
    }];
    setMessageList(newMessageList);
  };
  const handleOnChange = (event) => {
    const inputMessage = event.target.value;
    setMessage(inputMessage);
  };

  return (
    <div className={styles.chat_box}>
      <Header as="h3" dividing style={{ marginBottom: '0' }}>
        채팅상자
      </Header>
      <div className={styles.message_form}>

        <MessageList messageList={messageList} />
        <form style={{ top: '17rem', width: '100%' }} onSubmit={handleSendMessage}>
          <Input
            action={{ icon: 'paper plane' }}
            actionPosition="right"
            ref={inputRef}
            placeholder="메세지를 입력하세요"
            className={styles.chat_input}
            style={{ width: '100%', paddingRight: '0' }}
            onChange={handleOnChange}
            value={message || ''}
          />
        </form>
      </div>
    </div>
  );
};

export default ChatInWaitingRoom;
