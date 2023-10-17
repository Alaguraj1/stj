import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Login from './component/Login'
import Home from './component/Home'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
