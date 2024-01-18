import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../../utils/constants";

export const CarOwnershipContext = React.createContext();

const ethereum = window.ethereum;
const ethereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  console.log(provider);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({ contract, signer, provider });

  return contract;
};

const initialFormData = {
  makeCar: "",
  modelCar: "",
  yearCar: 0,
  carId: 0,
  addressOwner: "",
  addOwnerName: "",
};

export const CarOwnershipProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const [carsData, setCarsData] = useState([]);

  const handleChange = (e, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };

  const checkWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No account found");
      }

      console.log(accounts);
      //console.log(currentAccount);
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log("Connected", accounts);
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  const addCar = async (car) => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { makeCar, modelCar, yearCar, addressOwner } = formData;
      const contract = ethereumContract();

      await ethereum.request({
        method: "eth_requestAccounts",
      });
      const cars = await contract.addCar(
        makeCar,
        modelCar,
        yearCar,
        addressOwner
      );
      console.log(cars);
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  const getCarId = async (car) => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { carId } = formData;
      const contract = ethereumContract();

      await ethereum.request({
        method: "eth_requestAccounts",
      });
      const cars = await contract.cars(carId);
      console.log(cars);

      setCarsData(cars);
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  const addOwner = async (owner) => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { addOwnerName, addressOwner } = formData;
      const contract = ethereumContract();

      await ethereum.request({
        method: "eth_requestAccounts",
      });
      const cars = await contract.addOwner(addOwnerName, addressOwner);
      console.log(cars);
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  const changeOwner = async (car, owner) => {};

  const getOwner = async (car) => {};

  const getOwnerCars = async (owner) => {
    try {
      if (!ethereum) return alert("Please install MetaMask");

      const { addressOwner } = formData;
      const contract = ethereumContract();

      await ethereum.request({
        method: "eth_requestAccounts",
      });
      const cars = await contract.getOwnerCars(addressOwner);
      console.log(cars);
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  useEffect(() => {
    checkWalletConnected();
  }, []);
  return (
    <CarOwnershipContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        getOwnerCars,
        addCar,
        getCarId,
        addOwner,
        carsData,
        setCarsData,
      }}
    >
      {children}
    </CarOwnershipContext.Provider>
  );
};