import React from "react";
import "./Home.css";
import { useFormContext } from "../../context/TodoContext";

const home = () => {
  const { formData } = useFormContext();
  return (
    <>
      <div className="Home">
        <h2>Form valuessssss</h2>
        {/* <p>{formData}</p> */}
      </div>
    </>
  );
};

export default home;
