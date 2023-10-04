import React from 'react';
import './ChatMessage.css'; // Import your CSS file

const ChatMessage = ({ text, align }) => {
  // Determine which CSS class to apply based on 'align' prop
  const className = align === 'left' ? 'chat-message-left' : 'chat-message-right';

  return <p className={className}>{text}</p>;
};

export default ChatMessage;