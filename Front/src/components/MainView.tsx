import React from "react";
import img1 from "../assets/doodle-5 1.png";
import img2 from "../assets/Saly-1.png";
import img3 from "../assets/doodle-7 1.png";
import SingInButton from "../commons/SingInButton";
import SingUpButton from "../commons/SingUpButton";

const MainView = () => {
  return (
    <div className="AppContainer p-4 max-h-screen">
      <h1 className="font-bold text-6xl">THE</h1>
      <h1 className="font-bold text-6xl">PERFECT</h1>
      <h1 className="font-bold text-6xl">
        <span className="font-bold text-white">M</span>ENTOR
      </h1>
      <img src={img1} alt="" className="absolute top-32 right-64" />
      <img src={img2} alt="" className="absolute top-32" />
      <img src={img3} alt="" className="absolute bottom-32" />
      <div className="w-11/12 absolute bottom-5 ">
        <SingInButton action={"goToSingInForm"} />
        <SingUpButton type={"hola"} />
      </div>
    </div>
  );
};

export default MainView;
