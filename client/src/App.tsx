import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";

function App() {

  return (
    <>

      <Routes>
        <Route element={<Layout/>} />
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App;
