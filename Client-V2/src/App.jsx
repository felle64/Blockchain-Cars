import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./pages/Welcome/Welcome";
import WelcomeService from "./pages/Welcome/WelcomeService";
import Services from "./pages/Services/Services";
import Transactions from "./pages/Transactions/Transactions";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="">
      <Router>
        <div className="gradient-bg-general">
          <Navbar />
          <Routes>
            <Route
              path="/Blockchain-Cars/"
              element={((<WelcomeService />), (<Welcome />))}
            />
            <Route path="/Blockchain-Cars/Home" element={<Welcome />} />
            <Route path="/Blockchain-Cars/Services" element={<Services />} />
            <Route
              path="/Blockchain-Cars/Transactions"
              element={<Transactions />}
            />
          </Routes>
        </div>
        <div className="h-20">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
