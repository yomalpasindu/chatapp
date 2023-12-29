//import React from "react";
import ConnectedUsers from "./ConnectedUsers";
import MessageContent from "./MessageContent";
import NewMessage from "./NewMessage";
interface ChatProps {
  messages: { user: string; message: string }[];
  sendMessage: (message: string) => Promise<void>;
  closeConnection: () => void;
  users: string[];
}
const Chat = ({ messages, sendMessage, closeConnection, users }: ChatProps) => {
  return (
    <>
      <div className="">
        <button className="btn btn-danger" onClick={closeConnection}>
          Leave Room
        </button>
      </div>
      <div className="chat">
        <ConnectedUsers users={users}></ConnectedUsers>
        <MessageContent messages={messages}></MessageContent>
        <NewMessage sendMessage={sendMessage}></NewMessage>
      </div>
    </>
  );
};

export default Chat;
