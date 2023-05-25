import React from "react";
import { useNavigate } from "react-router";

type Props = { action: string; data: object };

const SingInButton = (prop: Props) => {
  const navigate = useNavigate();

  function handleSingIn(action: string) {
    return action === "Submit"
      ? /*aqui va la conexion con el back para hacer el submit, los datos estan en prop.data */ console.log(
          "hey",
          prop.data
        )
      : navigate("/SingIn");
  }

  return (
    <button
      className="h-10 text-white bg-zinc-700 w-full rounded-full mt-5"
      onClick={() => handleSingIn(prop.action)}
    >
      Sing in
    </button>
  );
};

export default SingInButton;
