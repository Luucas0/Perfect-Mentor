import React from "react";
import img1 from "../assets/doodle-5 1.png";
import img2 from "../assets/Saly-1.png";
import img3 from "../assets/doodle-7 1.png";
import SingInButton from "../commons/SingInButton";
import SingUpButton from "../commons/SingUpButton";

const MainView = () => {
  return (
    <div className="AppContainer px-9 py-28 max-h-screen">
      <h1 className="font-bold text-5xl">THE</h1>
      <h1 className="font-bold text-5xl">PERFECT</h1>
      <h1 className="font-bold text-5xl">
        <span className="font-bold text-white">M</span>ENTOR
      </h1>
      <img src={img1} alt="" className="absolute top-48 left-0.5" />
      <img src={img2} alt="" className="absolute top-40 left-12 w-10/12" />
      <img src={img3} alt="" className="absolute bottom-48 w-44 left-24" />
      <div className="w-10/12 absolute bottom-5 ">
        <SingInButton action={"goToSingInForm"} data={{}} />
        <SingUpButton action={"hola"} data={{}} />
      </div>
    </div>
  );
};

export default MainView;
