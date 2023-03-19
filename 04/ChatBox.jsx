// ChatBox component
import React from 'react';

const ChatBox = ({ text }) => {
  return (
    <div className="chat-box">
      <div className="text">{text}</div>
    </div>
  );
};

export default ChatBox;
