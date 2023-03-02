import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Chat from "./pages/Chat/Chat";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat-app" element={<Chat />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
