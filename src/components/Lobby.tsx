import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  Room: z.string().min(1),
  User: z.string().min(1),
});
type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}
const Lobby = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <div className="mb-3">
        <input
          placeholder="Room"
          type="text"
          className="form-control"
          {...register("Room")}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="User Name"
          type="text"
          className="form-control"
          {...register("User")}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <button disabled={!room || !user} className="btn btn-info" type="submit">
        Join
      </button>
    </form>
  );
};

export default Lobby;
