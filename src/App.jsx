import "./App.css";
import Mail from "./pages/Mail";
import Login from "./pages/login";
import Register from "./pages/register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Mail />}></Route>
      </Routes>
    </>
  );
}

export default App;
