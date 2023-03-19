import React, { useState } from 'react';
import ChatBox from './ChatBox';
import Avatar from './Avatar';
import './style.css';

const ChatRoom = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', img: '/a.png', from: 'sender' },
    { text: 'Hello!', img: '/b.png', from: 'sender' },
    { text: 'Hi there!', img: '/c.png', from: 'receiver' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { text: newMessage }]);
    setNewMessage('');
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((message, index) => (
          <div className={`message-${message.from}`} key={index}>
            <Avatar  img={message.img}/>
            <ChatBox text={message.text}  />
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input type="text" placeholder="Type your message here" value={newMessage} onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatRoom;
