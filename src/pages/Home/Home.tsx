import React, { useEffect, useState } from "react";
import "./Home.css";
import { TlocalStorageForm, useFormContext } from "../../context/TodoContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const home = () => {
  const { localStorageForm, CheckboxClicked } = useFormContext();
  const incompletedTasks = localStorageForm.filter((task) => !task.doneDate);

  return (
    <>
      <div className="Home">
        {incompletedTasks.map((task) => (
          <div key={task.id} className="Home__space">
            <input
              className="Home__checkbox-round"
              type="checkbox"
              onChange={() => CheckboxClicked(task)}
            />
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
