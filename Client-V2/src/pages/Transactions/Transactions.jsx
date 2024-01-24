import { useContext, useState } from "react";
import { CarOwnershipContext } from "../../context/CarOwnershipContext";
import { SiEthereum } from "react-icons/si";

const Transaction = () => {
  const { getAllTransactions } = useContext(CarOwnershipContext);

  const [transactionHistory, setTransactionHistory] = useState([]);

  const handleFetchTransactions = async (e) => {
    try {
      const transactions = await getAllTransactions();
      setTransactionHistory(transactions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
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
      <div className="flex-grow overflow-auto">
        <div className="flex-warp flex-row text-white blue-glass p-5 mt-5 mb-1">
          {transactionHistory.map((transaction, index) => (
            <div key={index} className="transaction-card">
              <p>Car ID: {transaction.carId}</p>
              <p>Previous Owner: {transaction.previousOwner}</p>
              <p>New Owner: {transaction.newOwner}</p>
              <p>
                Timestamp:{" "}
                {new Date(
                  parseInt(transaction.timestamp) * 1000
                ).toLocaleString("en-GB", {
                  hour12: false,
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
