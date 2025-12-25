import Image from "next/image";
import React from "react";
import { images } from "../public/images/assets.js";

const Hero = () => {
  return (
    <div className=" relative w-full h-screen object-cover">
      <Image
        className=" absolute w-full h-screen object-cover "
        src={images.bg}
        alt=""
      ></Image>
    </div>
  );
};

export default Hero;
