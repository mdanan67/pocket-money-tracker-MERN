"use client";
import { useState } from "react";
import Parents from "./Parents";
import Navbar from "@/componont/Navbar";
import SignUpForm from "@/componont/SignUpForm";

const Homes = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" flex flex-col bg-black text-white">
      {toggle && (
        <SignUpForm setToggle={setToggle} toggle={toggle}></SignUpForm>
      )}
      <Navbar setToggle={setToggle}></Navbar>
    </div>
  );
};

export default Homes;
