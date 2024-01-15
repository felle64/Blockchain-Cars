import "./App.css";
import Web3 from "web3";

const App = () => {
  const loadBlockchainData = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    console.log("network:", network);
  };

  loadBlockchainData();

  return <div className="App"></div>;
};

export default App;
