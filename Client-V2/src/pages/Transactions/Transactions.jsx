import React, { useContext, useState, useEffect } from "react";

import { CarOwnershipContext } from "../../context/CarOwnershipContext";

const TransactionsBox = () => {};
const Transactions = () => {
  const { currentAccount } = useContext(CarOwnershipContext);

  return (
    <div className="flex flex-wrap h-screen justify-center item-center">
      <div className="flex md:flexrow flex-col items-start justify-between md:p-20 py-10 -px-6">
        <div className="flex justify-start items-start flex-col md:mr">
          <h1 className="text-5xl font-bold text-white">
            <span className="text-gradient py-12 justify-center">
              Transactions
            </span>
          </h1>
          <p className="text-2xl text-white text-base font-light">
            View your transactions
          </p>
        </div>
        <div className="flex justify-center items-center flex-col"></div>
      </div>
    </div>
  );
};

export default Transactions;
