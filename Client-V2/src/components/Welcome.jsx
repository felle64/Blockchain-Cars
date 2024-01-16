import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

const connectWallet = () => {};

const Welcome = () => {
  return (
    <div className="flex w-full justify-center item-center">
      <div className="flex md:flexrow flex-col items-start justify-between md: p-20 py-10 -px-6">
        <div className="flex flex-1 justify-start flex-col md:mr">
          <h1 className="text-5xl font-bold text-white">
            Welcome to{" "}
            <span className="text-gradient py-12">Car Ownership </span>
            on Chain!
          </h1>
          <p className="text-2xl text-white">
            A decentralized application add owners, add cars and changes owners.
            With all the history of ownership on the car available
          </p>
          <button
            type="button"
            onClick={connectWallet()}
            className="text-yellow-500 flex flex-row justify-start py-8"
          >
            test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
