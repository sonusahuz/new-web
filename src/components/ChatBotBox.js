import React from 'react';

const ChatBotBox = ({ openChatBox, setOpenChatBox }) => {
  return (
    <div className="container p-3">
      <div
        style={{ zIndex: 1 }}
        className="bg-primary text-white d-flex align-items-center justify-content-center position-fixed bottom-0 left-0 mb-4 chat-icon"
      >
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
    </div>
  );
};

export default ChatBotBox;
