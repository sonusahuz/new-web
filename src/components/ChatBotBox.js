import React from 'react';

const ChatBotBox = ({ openChatBox, setOpenChatBox }) => {
  return (
    <div
      className="chat-icon-container position-fixed"
      onClick={() => setOpenChatBox(!openChatBox)}
    >
      {openChatBox ? (
        <i className="bi bi-x-lg chat-icon"></i>
      ) : (
        <i className="bi bi-chat chat-icon"></i>
      )}
    </div>
  );
};

export default ChatBotBox;
