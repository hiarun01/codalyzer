import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black h-16 flex justify-center items-center border-t  border-gray-800 shadow-2xs">
      <span className="text-white font-bold font-mono ">
        Build by -{" "}
        <a className="underline" href="https://x.com/hiarun01" target="_blank">
          hiarun01
        </a>
      </span>
    </footer>
  );
};

export default Footer;
