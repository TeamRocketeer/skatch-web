import React from 'react';
import { Comment } from 'semantic-ui-react';
import styles from '../chatBox/InWaitingRoom/chatInWaitingRoom.module.css';
import SubmittedMessage from '../message/SubmittedMessage';

// eslint-disable-next-line react/prop-types
const MessageList = ({ messageList }) => (
  <ul className={styles.message_list}>
    <Comment.Group>
      {
          // eslint-disable-next-line react/prop-types
                messageList.map((text) => (
                  <SubmittedMessage message={text} key={text.id} />
                ))
            }
    </Comment.Group>
  </ul>
);

export default MessageList;
