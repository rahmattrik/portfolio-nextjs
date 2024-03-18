import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] text-white">
      <div className="container p-12 flex justify-between">
        <span>
        <Image
                className="relative px-0"
                src={"/images/coding.png"}
                alt="logo"
                width={32}
                height={16}
              />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
