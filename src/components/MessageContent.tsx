import React from "react";
interface MessageProp {
  messages: { user: string; message: string }[];
}
const MessageContent = ({ messages }: MessageProp) => {
  return (
    <>
      <div className="col-md-5"></div>
      <div className="col-md-3">
        <div className="message-content">
          {messages.map((m, index) => (
            <div key={index} className="user-message">
              <div className="message bg-primary">{m.message}</div>
              <div className="form-user">{m.user}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageContent;
