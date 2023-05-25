import img1 from "../assets/doodle-7 1.png";
import img2 from "../assets/doodle-5 1.png";
import { useState } from "react";
import SingUpButton from "../commons/SingUpButton";
type Props = {};
import { useLocation } from "react-router";

const SingInForm = (props: Props) => {
  const type: string = useLocation().pathname.slice(1);
  console.log(type, useLocation());

  const [name, setName] = useState("userName");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("password");
  return (
    <div className="SingInContainer  px-10" style={{ paddingTop: "6rem" }}>
      <h1 className="font-bold text-5xl">THE</h1>
      <h1 className="font-bold text-5xl">PERFECT</h1>
      <h1 className="font-bold text-5xl">
        <span className="font-bold text-white">M</span>ENTOR
      </h1>
      <img src={img1} alt="" className="absolute top-7 left-36" />
      <img src={img2} alt="" className="absolute top-24 right-1" />
      <div
        className="border-solid mt-10 border-2 border-black p-5 rounded-3xl mt-1"
        style={{ width: "335px", height: "381px" }}
      >
        <form>
          <h1 className="font-bold text-4xl mb-5">
            {type === "SingUp" ? "Sing up" : "Sing In"}
          </h1>
          <hr
            className="bg-transparent"
            style={{ borderTop: "2px dotted black" }}
          />

          {type === "SingUp" ? (
            <></>
          ) : (
            <h2 className="font-light mt-7 text-4xl "> Hi, name</h2>
          )}

          <div style={{ display: type === "SingIn" ? "none" : "inherit" }}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
              className="absolute my-7 mx-2 h-8 w-6 p-0.5 bg-white rounded-full"
            >
              <path d="M12 2a5 5 0 105 5 5 5 0 00-5-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm9 11v-1a7 7 0 00-7-7h-4a7 7 0 00-7 7v1h2v-1a5 5 0 015-5h4a5 5 0 015 5v1z" />
            </svg>
            <input
              type="text"
              className="bg-transparent my-4 text-color border-solid border-2 border-black rounded-full h-14 w-full pl-9 "
              value={name}
              onClick={(e) => {
                setName("");
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
            className="absolute my-7 mx-2 h-8 w-6 p-0.5 bg-white rounded-full"
          >
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6m-2 0l-8 5-8-5h16m0 12H4V8l8 5 8-5v10z" />
          </svg>

          <input
            type="email"
            className="bg-transparent my-4 text-color border-solid border-2 border-black rounded-full h-14 w-full pl-9  "
            value={email}
            onClick={(e) => {
              setEmail("");
            }}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(email);
            }}
          />
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            className="absolute my-7 mx-2 h-8 w-6 p-0.5 bg-white rounded-full"
          >
            <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1156 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z" />
          </svg>
          <input
            type="text"
            className="bg-transparent my-4 text-color border-solid border-2 border-black rounded-full h-14 w-full pl-9 "
            value={password}
            onClick={(e) => {
              setPassword("");
              e.target.type = "password";
              console.log(e.target);
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {type === "SingIn" ? (
            <p className="text-sm"> Do you forgot your password?</p>
          ) : (
            <></>
          )}
        </form>
      </div>
      <div style={{ width: "335px" }}>
        <SingUpButton
          action={"Submit"}
          data={{ name: name, email: email, password: password }}
        />
      </div>
    </div>
  );
};

export default SingInForm;
