import "./App.css";

import { Routes, Route } from "react-router-dom";
import AddTask from "./pages/Add-task/AddTask";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addTask" element={<AddTask />} />
        <Route path="History" element={<History />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
