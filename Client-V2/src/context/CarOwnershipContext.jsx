import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../../utils/constants";

export const CarOwnershipContext = React.createContext();

const { ethereum } = window;

const getEthersProvider = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log("provider", provider);
  console.log("signer", signer);
  console.log("contract", contract);
};

export const CarOwnershipProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

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
    } catch (error) {
      console.log(error);

      throw new Error("no ethereum object");
    }
  };

  const addOwner = async (owner) => {};

  const changeOwner = async (car, owner) => {};

  const getOwner = async (car) => {};

  const getOwnerCars = async (owner) => {};

  useEffect(() => {
    checkWalletConnected();
  }, []);
  return (
    <CarOwnershipContext.Provider value={{ connectWallet }}>
      {children}
    </CarOwnershipContext.Provider>
  );
};
