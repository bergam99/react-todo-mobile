import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import { Fragment } from "react";

const Footer = () => {
  const location = useLocation();
  return (
    <Fragment>
      {" "}
      <div className="Footer">
        <Link to="/">
          <button
            className="Footer__button"
            style={{
              backgroundColor:
                location.pathname === "/"
                  ? "var(--color-green)"
                  : "var(--color-light-navy)",
            }}
          >
            <img
              className="Footer__img"
              src="public/vector-icon/home.png"
              alt="home"
              style={{
                backgroundColor:
                  location.pathname === "/"
                    ? "var(--color-green)"
                    : "var(--color-light-navy)",
              }}
            />
          </button>
        </Link>
        <Link to="/AddTask">
          <button
            className="Footer__button"
            style={{
              backgroundColor:
                location.pathname === "/AddTask"
                  ? "var(--color-yellow)"
                  : "var(--color-light-navy)",
            }}
          >
            <img
              className="Footer__img"
              src="public/vector-icon/add.png"
              alt="add"
              style={{
                backgroundColor:
                  location.pathname === "/AddTask"
                    ? "var(--color-yellow)"
                    : "var(--color-light-navy)",
              }}
            />
          </button>
        </Link>
        <Link to="/History">
          <button
            className="Footer__button"
            style={{
              backgroundColor:
                location.pathname === "/History"
                  ? "var(--color-pink)"
                  : "var(--color-light-navy)",
            }}
          >
            <img
              className="Footer__img"
              src="public/vector-icon/history.png"
              alt="history"
              style={{
                backgroundColor:
                  location.pathname === "/History"
                    ? "var(--color-pink)"
                    : "var(--color-light-navy)",
              }}
            />
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Footer;
