import React from 'react';
import { Card, Image } from 'semantic-ui-react';

// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { nickName, img } = user;
  return (
    <Card
      image={<Image src={img} centered size="tiny" />}
      header={nickName}
      style={{ width: '100%', height: '100%' }}
    />

  );
};

export default User;
