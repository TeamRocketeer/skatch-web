import React, { useState, useRef } from 'react';
import {
  Comment, Input, Header,
} from 'semantic-ui-react';
import styles from './chat.module.css';
import Message from '../message';

const Chat = () => {
  const [messageList, setMessageList] = useState([
    {
      id: 0,
      nickName: '성훈',
      img: '/images/logo.png',
      text: '남규야 진정해',
    },
    {
      id: 1,
      nickName: '남규',
      img: '/images/namq.jpg',
      text: '켘ㅋㅋㅋㅋ케켘ㅋㅋㅋㅋㅋㅋㅋㅋ앜ㅋㅋㅋㅋㅋㅋ어무웃곀ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ막이랰ㅋㅋㅋㅋㅋ',
    },
    {
      id: 2,
      nickName: '한결',
      img: '/images/gyeol.jpg',
      text: '그그그그그그그그그그그긐',
    },
    {
      id: 3,
      nickName: '보현',
      img: '/images/bose.jpg',
      text: '얜 진짜 안되겠다',
    },
    {
      id: 4,
      nickName: '신혁',
      img: '/images/hyuk.jpg',
      text: '나도 남규가 너무 걱정되...',
    },
  ]);
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

    <div className={styles.chat}>
      <ul className={styles.message_list}>
        <Header as="h3" dividing>
          채팅상자
        </Header>

        <Comment.Group>
          {
            messageList.map((text) => (
              <Message message={text} key={text.id} />
            ))
          }
        </Comment.Group>
      </ul>

      <form style={{ top: '17rem' }} onSubmit={handleSendMessage}>
        <Input
          action={{ icon: 'paper plane' }}
          actionPosition="right"
          ref={inputRef}
          placeholder="메세지를 입력하세요"
          className={styles.chat_input}
          style={{ width: '20rem', paddingRight: '0' }}
          onChange={handleOnChange}
          value={message || ''}
        />
      </form>
    </div>
  );
};

export default Chat;
