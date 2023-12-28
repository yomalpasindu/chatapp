//import React from "react";
import MessageContent from "./MessageContent";
import NewMessage from "./NewMessage";
interface ChatProps {
  messages: { user: string; message: string }[];
  sendMessage: (message: string) => Promise<void>;
}
const Chat = ({ messages, sendMessage }: ChatProps) => {
  return (
    <div className="chat">
      <MessageContent messages={messages}></MessageContent>
      <NewMessage sendMessage={sendMessage}></NewMessage>
    </div>
  );
};

export default Chat;
