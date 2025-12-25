import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div>
      <div>
        <nav className=" flex items-center justify-between mx-20 text-xl p-5">
          <div className=" font-bold text-3xl text-orange-400">TRACKER</div>{" "}
          <ul className=" flex text-gray-200 justify-center gap-7 items-center font-bold">
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">About us</a>
            </li>
            <li>
              {" "}
              <a href="#">Contuct</a>
            </li>
            <li>
              {" "}
              <a href="#"></a>
            </li>
            <li>
              {" "}
              <a href="#">Support</a>
            </li>
          </ul>
          <div className=" flex justify-between gap-7">
            <button className=" cursor-pointer rounded-[5px] font-black    items-center flex justify-center bg-gray-400 px-5 py-2">
              Login
            </button>{" "}
            <button
              onClick={() => setToggle(true)}
              className=" cursor-pointer rounded-[5px] font-black    items-center flex justify-center bg-gray-400 px-5 py-2"
            >
              Join Here
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
