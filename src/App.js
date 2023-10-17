import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from "./component/Login/Login"
import Home from './component/Home'
import Signup from "./component/Signup/Singup";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
