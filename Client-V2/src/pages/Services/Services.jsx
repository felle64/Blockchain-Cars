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

    if (!addressOwner) return;

    try {
      await getOwnerCars();

      const carIds = typeof ownedCars === "string" ? ownedCars.split(",") : [];
      const results = [];

      for (const carId of carIds) {
        try {
          console.log(`Processing carId: ${carId}`);
          const result = await getOwnerCarId(carId);
          if (result) {
            results.push(result);
            console.log(`Successfully processed carId: ${carId}`);
          }
        } catch (error) {
          console.error(`Error processing carId ${carId}:`, error);
        }
      }

      setSearchResults(results);
      console.log(results);
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
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="text-5xl font-bold text-white py-10">
        <span className="text-gradient">Services</span>
      </div>
      <p className="text-2xl text-white font-light mb-10">
        A decentralized application where you can add owners, cars, and change
        owners, with all the history of ownership on the car available.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4">
        <div className="blue-glass p-5 rounded-lg">
          <h1 className="text-sm font-bold text-white mb-4">Add Car</h1>
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
        <div className="blue-glass p-5 rounded-lg">
          <h1 className="text-sm font-bold text-white mb-4">
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
        <div className="blue-glass p-5 rounded-lg">
          <h1 className="text-sm font-bold text-white mb-4">
            Look up car by Id
          </h1>
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

        <div className="blue-glass p-5 rounded-lg">
          <h1 className="text-sm font-bold text-white mb-4">
            Look up owners cars
          </h1>
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
                  {result.make}, {result.model}, {result.year.toString()}, Car
                  ID: {carsIdArray[index]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="blue-glass p-5 rounded-lg">
          <h1 className="text-sm font-bold text-white mb-4">
            Look up owner name
          </h1>
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
        <div className="blue-glass p-5 rounded-lg">
          <h1 className="text-sm font-bold text-white mb-4">Change Owner</h1>
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
    </div>
  );
};

export default Services;
