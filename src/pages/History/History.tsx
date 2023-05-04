import React, { Fragment } from "react";
import "./History.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { TlocalStorageForm, useFormContext } from "../../context/TodoContext";
import Button from "../../components/Button/Button";

const History = () => {
  const { localStorageForm, CheckboxClicked } = useFormContext();

  // const completedTasks = localStorageForm.filter((task) => task.doneDate);
  const completedTasks = localStorageForm.filter(
    (task) => task.doneDate !== null
  );

  return (
    <Fragment>
      <section className="History">
        {completedTasks.length === 0 ? (
          <div>
            <Button
              ExplainText={"Votre historique est vide 😬"}
              ButtonText="Créer une tâche"
              ButtonLink="/AddTask"
            />
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
