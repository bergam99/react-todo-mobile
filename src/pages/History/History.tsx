import React from "react";
import "./History.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TlocalStorageForm } from "../../context/TodoContext";

const History = () => {
  const [localStorageForm] = useLocalStorage<TlocalStorageForm[]>(
    "form-data",
    []
  );

  const completedTasks = localStorageForm.filter((task) => task.isDone);

  return (
    <>
      <h1 className="History">History Page</h1>
      {completedTasks.map((task) => (
        <div key={task.id}>
          <p>Category: {task.category}</p>
          <p>Content: {task.content}</p>
          <p>Urgent: {task.isUrgent ? "Yes" : "No"}</p>
          <p>Is Done: {task.isDone ? "Yes" : "No"}</p>
        </div>
      ))}
    </>
  );
};

export default History;
