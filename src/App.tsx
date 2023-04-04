import "./App.css";
import { Routes, Route } from "react-router-dom";
import History from "./pages/History/History";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AddTask from "./pages/AddTask/AddTask";
import { FormProvider } from './context/TodoContext';

function App() {
  return (
    <>
      <FormProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="AddTask" element={<AddTask />} />
          <Route path="History" element={<History />} />
        </Routes>
        <Footer />
      </FormProvider>
    </>
  );
}

export default App;
