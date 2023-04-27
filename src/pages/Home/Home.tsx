import React, { useEffect, useState } from "react";
import "./Home.css";
import { TlocalStorageForm } from "../../context/TodoContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const home = () => {
  const [localStorageForm] = useLocalStorage<TlocalStorageForm[]>(
    "form-data",
    []
  );

  return (
    <>
      <div className="Home">
        {localStorageForm.map((task) => (
          <div key={task.id} className="Home__space-buttom">
            <input className="Home__checkbox-round" type="checkbox" />
            &nbsp; &nbsp;
            <span>{task.isUrgent ? "⚠️" : ""}</span>
            &nbsp;
            <span>{task.category}</span>
            &nbsp;
            <span>{task.content}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default home;
