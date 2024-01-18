import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { CarOwnershipContext } from "../../context/CarOwnershipContext";

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      type={type}
      onChange={(e) => handleChange(e, name)}
      className="w-full my-2 rounded-sm p-2 bg-transparent text-white border-none text-sm white-glass"
    />
  );
};
const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    getOwnerCars,
  } = useContext(CarOwnershipContext);

  const handleSubmit = (e) => {
    const { addressOwner } = formData;
    console.log(addressOwner);

    e.preventDefault();

    if (!addressOwner) return;

    getOwnerCars();
  };

  return (
    <div className="flex w-full justify-center item-center">
      <div className="flex md:flexrow flex-col items-start justify-between md:p-20 py-10 -px-6">
        <div className="flex flex-1 justify-start items-start flex-col md:mr">
          <h1 className="text-5xl font-bold text-white">
            Welcome to{" "}
            <span className="text-gradient py-20">Car Ownership on Chain!</span>
          </h1>
          <p className="text-2xl text-white text-base font-light">
            A decentralized application were you can add owners, add cars and
            changes owners. With all the history of ownership on the car
            available
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
        </div>
      </div>
      <div className="p-5 sm:w-96 h-40 mt-10 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={handleChange}
        />
        <div className="h-[1px] w-full bg-white my-2"></div>
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmit}
        >
          <SiEthereum className="text-white mr-2" />
          <p className="text-sm text-white font-semibold">Search</p>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
