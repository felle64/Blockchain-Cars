import React, { useContext } from "react";

import { CarOwnershipContext } from "../../context/CarOwnershipContext";

const Services = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    getOwnerCars,
  } = useContext(CarOwnershipContext);

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

  return (
    <div className="flex flex-wrap justify-center item-center">
      <div className="flex md:flexrow flex-col items-start justify-between md:p-20 py-10 -px-6">
        <div className="flex justify-start items-start flex-col md:mr">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-gradient py-12 justify-center">
              Services{" "}
            </span>
          </h1>
          <p className="text-2xl text-white text-base font-light">
            A decentralized application were you can add owners, add cars and
            changes owners. With all the history of ownership on the car
            available
          </p>
        </div>
      </div>
      <div className="p-5 sm:w-96 h-100 mb-11 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Add Car</h1>
        <Input
          placeholder="Make"
          name="makeCar"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Model"
          name="modelCar"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Year"
          name="yearCar"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
      </div>
      <div className="p-5 sm:w-96 h-40 mt-20 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Add Owner Name</h1>
        <Input
          placeholder="Add Owner Name"
          name="addOwnerName"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
      </div>
      <div className="p-5 sm:w-96 h-40  mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
      </div>
      <div className="p-5 sm:w-96 h-100 mt-20 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Services;
