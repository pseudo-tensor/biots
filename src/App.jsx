import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
