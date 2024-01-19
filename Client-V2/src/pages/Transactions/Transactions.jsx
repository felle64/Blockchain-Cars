import React, { useContext, useState, useEffect } from "react";
import { CarOwnershipContext } from "../../context/CarOwnershipContext";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

const Transaction = () => {
  const {
    currentAccount,
    getOwnerCars,
    getTransactionHistory,
    formData,
    carId,
    getAllTransactions,
  } = useContext(CarOwnershipContext);

  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleFetchTransactions = async (e) => {
    try {
      const result = await getAllTransactions();
      console.log("Transaction History:", result.toString());
      setTransactionHistory(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-5xl font-bold text-white text-gradient py-20 mb-4">
        Transaction History
      </h1>

      <div>
        <button
          type="button"
          className="flex flex-row justify-center items-center bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
          onClick={handleFetchTransactions}
        >
          <SiEthereum className="text-white mr-2" />
          <p className="text-sm text-white font-semibold">Fetch Transactions</p>
        </button>
      </div>
    </div>
  );
};

export default Transaction;
