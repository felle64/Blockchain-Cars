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
            <Route path="/" element={((<WelcomeService />), (<Welcome />))} />

            <Route path="/Home" element={<Welcome />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Transactions" element={<Transactions />} />
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
