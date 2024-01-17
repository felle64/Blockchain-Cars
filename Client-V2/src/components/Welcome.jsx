import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

import { CarOwnershipContext } from "../context/CarOwnershipContext";

const Welcome = () => {
  const { connectWallet, currentAccount } = useContext(CarOwnershipContext);

  return (
    <div className="flex w-full justify-center item-center">
      <div className="flex md:flexrow flex-col items-start justify-between md:p-20 py-10 -px-6">
        <div className="flex flex-1 justify-start items-start flex-col md:mr">
          <h1 className="text-5xl font-bold text-white">
            Welcome to{" "}
            <span className="text-gradient py-12">Car Ownership </span>
            on Chain!
          </h1>
          <p className="text-2xl text-white text-base font-light">
            A decentralized application add owners, add cars and changes owners.
            With all the history of ownership on the car available
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Login</p>
            </button>
          )}

          {/* <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 w-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
