import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Lobby from "./components/Lobby";
import {
  HubConnection,
  HubConnectionBuilder,
  LogLevel,
} from "@microsoft/signalr";
import Chat from "./components/Chat";

function App() {
  interface Message {
    user: string;
    message: string;
  }

  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState<Message[]>([]);

  const joinRoom = async (Room: string, User: string) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7019/Chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message) => {
        setMessages((prevMessages) => [...prevMessages, { user, message }]);
      });

      connection.onclose(() => {
        connection.stop();
        setConnection(connection);
        setMessages([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { Room, User });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };

  // const closeConnection = async () => {
  //   try {
  //     await connection?.stop();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const sendMessage = async (message: string) => {
    try {
      await connection?.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="form-content">
        <div className="row">
          {!connection ? (
            <Lobby onSubmit={(data) => joinRoom(data.Room, data.User)}></Lobby>
          ) : (
            <Chat messages={messages} sendMessage={sendMessage}></Chat>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
