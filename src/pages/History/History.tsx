import React, { Fragment } from "react";
import "./History.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TlocalStorageForm, useFormContext } from "../../context/TodoContext";

const History = () => {
  const { localStorageForm, CheckboxClicked } = useFormContext();

  const completedTasks = localStorageForm.filter((task) => task.doneDate);

  return (
    <Fragment>
      <section className="History">
        {completedTasks.length === 0 ? (
          <div>
            <p>Votre historique est vide 😬</p>
            <button>Créer une tâche</button>
          </div>
        ) : (
          <div>
            {" "}
            <p className="History__space">Historique des tâches :</p>
            {completedTasks.map((task) => (
              <div key={task.id} className="History__space">
                <input
                  className="History__circle"
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
        )}
      </section>
    </Fragment>
  );
};

export default History;
