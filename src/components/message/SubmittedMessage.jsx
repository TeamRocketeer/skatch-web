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
          <Comment.Author as="a" style={{ fontWeight: 'border', fontSize: '1.2rem' }}>{nickName}</Comment.Author>
          <Comment.Text style={{ fontSize: '1rem' }}>{text}</Comment.Text>
        </Comment.Content>
      </Comment>
    </li>
  );
};

export default SubmittedMessage;
