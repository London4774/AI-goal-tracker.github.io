import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/ProfilePage/Profile";

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>} />
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  )
}

export default App;
