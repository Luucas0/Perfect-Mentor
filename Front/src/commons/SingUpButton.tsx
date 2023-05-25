import React from "react";
import { useNavigate } from "react-router";

type Props = { action: string; data: object };

const SingUpButton = (prop: Props) => {
  const navigate = useNavigate();
  function handleSingUp(action: string) {
    return action === "Submit"
      ? /*aqui va la conexion con el back para hacer el submit, la data esta en el prop.data */ console.log(
          "hey",
          prop.data
        )
      : navigate("/SingUp");
  }
  return (
    <button
      className="bg-transparent w-full mt-5 border-solid border-2
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
