import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/ProfilePage/Profile";
import AiPage from "./pages/AiPage";
import StatsPage from "./pages/StatsPage";
import StreakPage from "./pages/StreakPage";

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
        <Route path="/ai" element={<AiPage/>} />
        <Route path="/stats" element={<StatsPage/>} />
        <Route path="/streak" element={<StreakPage/>} />
      </Routes>
    </>
  )
}

export default App;
