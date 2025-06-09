import React from "react";

const Header = () => {
  return (
    <header className="bg-red-500 py-5 px-5 fixed -top-10 left-0 w-full z-50">
      <div className="max-w-[85%] m-auto flex items-center justify-between w-full relative">
        <img 
          src="/assets/images/logo.png"
          alt="left-logo" 
          className="w-[100px] h-[100px] object-contain"
        />
        <h1 className="text-3xl text-blue-500 text-center font-serif font-[800]">
          React Demo Application
        </h1>
        <img 
          src="/assets/images/logo.png" 
          alt="right-logo" 
          className="w-[100px] h-[100px] object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
