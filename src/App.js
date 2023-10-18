import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from "./component/Login/Login"
import Home from './component/Home'
import Signup from "./component/Signup/Singup";
import ChitDetails from "./component/ChitDetails/ChitDetails";
import PayDue from "./component/PayDue/PayDue";
import Payment from "./component/Payment/Payment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chit-details" element={<ChitDetails />} />
          <Route path="/pay-due" element={<PayDue />} />
          <Route path="/Payment" element={<Payment />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
