import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-400 mx-auto my-20 ">
      <div className=" max-w-7xl mx-auto flex flex-col justify-center items-center py-10 gap-3 px-4 sm:px-0">
        <p className=" text-6xl font-bold">404</p>
        <h1 className="font-semibold text-[48px] text-[#001931] text-center">
          OPPS!! PAGE NOT FOUND
        </h1>
        <p className=" text-base text-[#627382] text-[20px] text-center">
          The Page you are requesting is not found on our system. please try
          another Page.
        </p>
        <Link href={"/"}>
          <button className=" text-white font-bold text-base rounded-sm  bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 cursor-pointer">
            Go Back!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
