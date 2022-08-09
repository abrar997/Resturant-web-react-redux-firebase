import React from "react";
// icons from react-icons
import { MdShoppingBasket } from "react-icons/md";
// router
import { Link } from "react-router-dom";
// motion
import { motion } from "framer-motion";
// firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
const Header = () => {
  const firbaseAuth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const loging = async () => {
    // login from firebase docs
    const response = await signInWithPopup(firbaseAuth, provider);
    console.log(response);
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="./img/logo.png" alt="logo" className="w-6  object-cover" />
          <p className="text-headeringColor text-xl font-bold ">Alrawi</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headeringColor duration- ease-in-out cursor-pointer ">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headeringColor duration- ease-in-out cursor-pointer ">
              Menu{" "}
            </li>
            <li className="text-base text-textColor hover:text-headeringColor duration- ease-in-out cursor-pointer ">
              About US
            </li>
            <li className="text-base text-textColor hover:text-headeringColor duration- ease-in-out cursor-pointer ">
              Service
            </li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor cursor-pointer text-2xl" />
            <div
              className="absolute  rounded-full
           bg-cartNumBg -top-3 -right-1  h-5  w-5  flex items-center justify-center "
            >
              <span className="text-xs  text-white font-semibold  "> 2</span>
            </div>
          </div>
          {/* add avatar image for user */}
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src="./img/avatar.png"
              alt="image-Profile"
              className="w-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer "
              onClick={loging}
            />
          </div>
        </div>
      </div>

      {/* phone mobile*/}
      <div className="flex md:hidden w-full h-full  p-4"></div>
    </header>
  );
};

export default Header;
