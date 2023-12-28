import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
//import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

interface NewMessageProp {
  sendMessage: (message: string) => Promise<void>;
}

const schema = z.object({
  userMessage: z.string(),
});

type FormData = z.infer<typeof schema>;

const NewMessage = ({ sendMessage }: NewMessageProp) => {
  const { register, handleSubmit } = useForm<FormData>();
  const [message, setMessage] = useState("");
  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendMessage(data.userMessage);
        setMessage("");
      })}
    >
      <div className="input-group mb-3" />
      <div className="row">
        <div className="col-md-10">
          <input
            {...register("userMessage")}
            type="text"
            className="form-control"
            placeholder="Type here..."
            aria-describedby="basic-addon1"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-warning" disabled={!message}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewMessage;
