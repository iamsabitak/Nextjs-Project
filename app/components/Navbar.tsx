import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="text-red-600 bg-red-200 p-6 flex justify-between">
        <div className="text-red-600 font-bold">This is Logo</div>
        <nav className="flex">
          <a className=" hover:text-gray-900 mr-6">Home</a>
          <a className=" hover:text-gray-900 mr-6">About</a>
          <a className=" hover:text-gray-900 mr-6">Service</a>
          <a className=" hover:text-gray-900 mr-6">Conatct</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
