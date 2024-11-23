import React from 'react';

const ChatBotBox = ({ openChatBox, setOpenChatBox }) => {
  return (
    <div className="chat-icon bg-primary text-white">
      {openChatBox ? (
        <i
          className="bi bi-x-lg fs-3 rounded-circle"
          onClick={() => setOpenChatBox(false)}
        ></i>
      ) : (
        <i
          className="bi bi-chat fs-3 rounded-circle"
          onClick={() => setOpenChatBox(true)}
        ></i>
      )}
    </div>
  );
};

export default ChatBotBox;
