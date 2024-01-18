import React, { useContext } from "react";
import {} from "ethers/lib/utils";

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

const Services = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleChange,
    getOwnerCars,
    addCar,
    getCarId,
    addOwner,
    carsData,
    setCarsData,
  } = useContext(CarOwnershipContext);

  const handleSubmitCar = (e) => {
    const { makeCar, modelCar, yearCar, addressOwner } = formData;
    console.log(makeCar, modelCar, yearCar, addressOwner);

    e.preventDefault();

    if (!makeCar || !modelCar || !yearCar || !addressOwner) return;

    addCar();
  };

  const handleSubmitCarId = async (e) => {
    const { carId } = formData;
    console.log(carId);
    e.preventDefault();

    if (!carId) return;

    try {
      await getCarId();
      console.log(carsData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitAddOwner = (e) => {
    const { addOwnerName, addressOwner } = formData;
    console.log(addOwnerName, addressOwner);

    e.preventDefault();

    if (!addOwnerName || !addressOwner) return;

    addOwner();
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
          //value={formData.makeCar}
          handleChange={handleChange}
        />
        <Input
          placeholder="Model"
          name="modelCar"
          type="text"
          //value={formData.modelCar}
          handleChange={handleChange}
        />
        <Input
          placeholder="Year"
          name="yearCar"
          type="number"
          //value={formData.yearCar}
          handleChange={handleChange}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          // value={formData.addressOwner}
          handleChange={handleChange}
        />
        <div className="h-[1px] w-full bg-white my-2"></div>
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitCar}
        >
          Add car
        </button>
      </div>
      <div className="p-5 sm:w-96 mt-20 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">
          Link Owners name to address
        </h1>
        <Input
          placeholder="Add Owner Name"
          name="addOwnerName"
          type="text"
          handleChange={handleChange}
        />
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
          onClick={handleSubmitAddOwner}
        >
          Link Owners Name
        </button>
      </div>
      <div className="p-5 sm:w-96 h-50 mb-10  mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up car by Id</h1>
        <Input
          placeholder="Car Id"
          name="carId"
          type="number"
          handleChange={handleChange}
        />
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitCarId}
        >
          Look up car
        </button>
        {carsData && (
          <div className="mt-4">
            <p>Car Make: {carsData[0]}</p>
            <p>Car Model: {carsData[1]}</p>
            <p>Car Year: {carsData[2].toString()}</p>
            <p>Car Owner: {carsData[3]}</p>
          </div>
        )}
      </div>

      <div className="p-5 sm:w-96 h-100 mt-10 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={handleChange}
        />
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitCarId}
        >
          Look up owner
        </button>
      </div>
      <div className="p-5 sm:w-96 h-40 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={() => {}}
        />
      </div>
      <div className="p-5 sm:w-96 h-40 mt-10 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner</h1>
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
