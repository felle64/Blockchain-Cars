import React, { useContext, useState } from "react";
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
    getOwnerCarId,
    ownedCars,
    changeOwner,
    getOwner,
    ownerName,
    setOwnedCars,
    carsIdArray,
  } = useContext(CarOwnershipContext);

  const [searchResults, setSearchResults] = useState([]);

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
    console.log(carsData);
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

  const handleSubmitGetOwnerCars = async (e) => {
    e.preventDefault();

    const { addressOwner } = formData;
    console.log(addressOwner);

    const carIds = typeof ownedCars === "string" ? ownedCars.split(",") : [];
    setOwnedCars(ownedCars);
    const results = [];

    try {
      await Promise.all(
        carIds.map(async (carId) => {
          try {
            console.log(ownedCars);
            console.log(`Processing carId: ${carId}`);
            const result = await getOwnerCarId(carId);
            results.push(result);
            console.log(`Successfully processed carId: ${carId}`);
          } catch (error) {
            console.error(`Error processing carId ${carId}:`, error);
          }
        })
      );

      setSearchResults(results);
      console.log(results);

      if (!addressOwner) return;
      getOwnerCars();
    } catch (error) {
      console.error("Error processing carIds:", error);
    }
  };

  const handleSubmitChangeOwner = (e) => {
    const { carId, newAddressOwner, addressOwner } = formData;
    console.log(carId, newAddressOwner, addressOwner);

    e.preventDefault();

    if (!carId || !newAddressOwner || !addressOwner) return;

    changeOwner();
  };

  const handleSubmitOwnerName = (e) => {
    const { addressOwner } = formData;
    console.log(addressOwner);

    e.preventDefault();

    if (!addressOwner) return;

    getOwner();
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
          handleChange={handleChange}
        />
        <Input
          placeholder="Model"
          name="modelCar"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Year"
          name="yearCar"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={handleChange}
        />
        <div className="h-[1px] w-full my-2"></div>
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitCar}
        >
          Add car
        </button>
      </div>
      <div className="p-5 sm:w-96 mt-20 mb-5 mr-5 w-full flex flex-col justify-start items-center blue-glass">
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
        <div className="h-[1px] w-full my-2"></div>
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
        {carsData.length !== [].length && (
          <div className="mt-4">
            <p className="text-white">Car Make: {carsData[0]}</p>
            <p className="text-white">Car Model: {carsData[1]}</p>
            <p>
              {" "}
              <p className="text-white">
                Car Year:{" "}
                {carsData[2] !== null ? carsData[2].toString() : "N/A"}
              </p>
            </p>
            <p className="text-white ">Car Owner:</p>
            <p className="text-white text-xs"> {carsData[3]}</p>
          </div>
        )}
      </div>

      <div className="p-5 sm:w-96 h-100 mt-10 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owners cars</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={handleChange}
        />
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitGetOwnerCars}
        >
          Look up cars
        </button>
        <div
          className={`w-full mt-2 flex flex-col justify-start items-start`}
          style={{ height: `${searchResults.length * 3}rem` }}
        >
          {searchResults.length !== 0 && (
            <h1 className="text-sm font-bold text-white ml-2 mt-2">
              Search Results
            </h1>
          )}
          {searchResults.map((result, index) => (
            <div key={index} className="mt-1 ">
              <p className="text-white ml-2">
                {result.make}, {result.model}, {result.year.toString()}, Car ID:{" "}
                {carsIdArray[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 sm:w-96 h-50 mb-10 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Look up owner name</h1>
        <Input
          placeholder="Address Owner"
          name="addressOwner"
          type="text"
          handleChange={handleChange}
        />
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitOwnerName}
        >
          Look up name
        </button>
        {ownerName.length !== [].length && (
          <div className="mt-4 ">
            <p className="text-white">Owner Name: {ownerName}</p>
          </div>
        )}
      </div>
      <div className="p-5 sm:w-96 h 50 mt-10 mr-5 w-full flex flex-col justify-start items-center blue-glass">
        <h1 className="text-sm font-bold text-white">Change Owner</h1>
        <Input
          placeholder="Car Id"
          name="carId"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Old Owner Address"
          name="addressOwner"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="New Owner Address"
          name="newAddressOwner"
          type="text"
          handleChange={handleChange}
        />
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleSubmitChangeOwner}
        >
          Change Owner
        </button>
      </div>
    </div>
  );
};

export default Services;
