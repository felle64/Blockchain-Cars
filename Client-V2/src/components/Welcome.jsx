import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import Loader from "./Loader";

const Welcome = () => {
  return (
    <div className="flex w-full justify-center item-center">
      <div className="flex md:flexrow flex-col items-start justify-between md: p-20 py-10 -px-6">
        <div className="flex flex-1 justify-start flex-col md:mr">
          <h1 className="text-5xl font-bold text-white">
            Welcome to <span className="text-[#000000]">Car Ownership</span> on
            Chain
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
