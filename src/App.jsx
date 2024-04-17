import "./App.css";
import Dialogs from "./components/Dialogs";
import Dialog from "./components/Dialog.jsx"
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
        <Route path="/mail" element={<Mail />}>
            <Route path='/mail/:id' element={<Dialog />} />
            <Route index element={<Dialogs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
