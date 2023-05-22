import React from "react";
import { useNavigate } from "react-router";

type Props = { action: string };

const SingUpButton = (prop: Props) => {
  const navigate = useNavigate();
  function handleSingUp(action: string) {
    return action === "Submit"
      ? /*aqui va la conexion con el back para hacer el submit */ console.log(
          "hey"
        )
      : navigate("/singUp");
  }
  return (
    <button
      className="bg-transparent w-full my-3 border-solid border-2
  2 border-black rounded-full h-10"
      onClick={() => {
        handleSingUp(prop.action);
      }}
    >
      Sing Up
    </button>
  );
};

export default SingUpButton;
