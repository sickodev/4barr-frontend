"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-2 border-t-2 fixed bottom-0 w-full justify-between flex z-10 bg-primary-foreground filter drop-shadow-xl">
      <a href="/search">Search</a>
      <a href="/home">Home</a>
      <a href="/profile">Profile</a>
    </nav>
  );
};

export default Navbar;
