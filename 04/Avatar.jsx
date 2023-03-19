// Avatar component
import React from 'react';

const Avatar = ({ img }) => {
  return (
    <div className="avatar">
      <img src={ img } alt="avatar" />
    </div>
  );
};

export default Avatar;
