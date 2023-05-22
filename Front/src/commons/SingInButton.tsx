import React from "react";
import { useNavigate } from "react-router";

type Props = { action: string };

const SingInButton = (prop: Props) => {
  const navigate = useNavigate();

  function handleSingIn(action: string) {
    return action === "Submit"
      ? /*aqui va la conexion con el back para hacer el submit */ console.log(
          "hey"
        )
      : navigate("/singIn");
  }

  return (
    <button
      className="h-10 text-white bg-zinc-700 w-full rounded-full static top-72"
      onClick={() => handleSingIn(prop.action)}
    >
      Sing in
    </button>
  );
};

export default SingInButton;
