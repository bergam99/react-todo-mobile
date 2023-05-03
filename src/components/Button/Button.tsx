// IF LENGTH === 0 COMPONENT

import { Fragment } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

type ButtonProps = {
  ExplainText: string;
  ButtonText: string;
  ButtonLink: string;
};

const Button: React.FC<ButtonProps> = ({
  ExplainText,
  ButtonText,
  ButtonLink,
}) => {
  return (
    <Fragment>
      <div className="Button">
        <p className="Button__margin-button">{ExplainText}</p>
        <Link to={ButtonLink}>
          <button className="Button__style">{ButtonText}</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Button;
