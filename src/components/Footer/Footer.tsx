import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <ul className="Footer">
        <Link to="/">
          <li className="Footer__li">
            <button className="Footer__buttons">
                <img
                  className="Footer__img"
                  src="public/vector-icon/home.png"
                  alt="home"
                />
            </button>
          </li>
        </Link>

        <Link to="/AddTask">
          <li className="Footer__li">
            <button>
                <img
                  className="Footer__img"
                  src="public/vector-icon/add.png"
                  alt="add"
                />
            </button>
          </li>
        </Link>

        <Link to="History">
          <li className="Footer__li">
            <button>
                <img
                  className="Footer__img"
                  src="public/vector-icon/history.png"
                  alt="history"
                />
            </button>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default Footer;
