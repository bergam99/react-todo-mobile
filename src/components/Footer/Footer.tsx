import { NavLink } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import AddTask from "../../pages/Add-task/AddTask";
import History from "../../pages/History/History";
import Home from "../../pages/Home/Home";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/AddTask">+</Link>
        <Link to="History">History</Link>


      </nav>
    </>
  );
};

export default Footer;
