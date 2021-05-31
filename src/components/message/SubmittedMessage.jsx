import React from 'react';
import { Comment } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
const SubmittedMessage = ({ message }) => {
  // eslint-disable-next-line react/prop-types
  const { nickName, img, text } = message;
  return (
    <li>
      <Comment>
        <Comment.Avatar src={img} />
        <Comment.Content>
          <Comment.Author as="a">{nickName}</Comment.Author>
          <Comment.Text>{text}</Comment.Text>
        </Comment.Content>
      </Comment>
    </li>
  );
};

export default SubmittedMessage;
