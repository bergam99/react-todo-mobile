import React, { Fragment, useEffect, useState } from "react";
import "./Home.css";
import { TlocalStorageForm, useFormContext } from "../../context/TodoContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import Button from "../../components/Button/Button";

type TaskItemProps = {
  task: TlocalStorageForm;
  onEdit: (taskId: number) => void;
};

const home: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  const { localStorageForm, CheckboxClicked } = useFormContext();
  const incompletedTasks = localStorageForm.filter((task) => !task.doneDate);

  const handleEditClick = () => {
    onEdit(task.id); // Pass the task ID to the parent component to trigger the edit mode
  };
  return (
    <Fragment>
      <section className="Home">
        {incompletedTasks.length === 0 ? (
          <div>
            <Button
              ExplainText={"Aucune tâche pour le moment 🙌"}
              ButtonText="Créer une tâche"
              ButtonLink="/AddTask"
            />
          </div>
        ) : (
          <div>
            {incompletedTasks.map((task) => (
              <div key={task.id} className="Home__space">
                <input
                  className="Home__checkbox-round"
                  type="checkbox"
                  onChange={() => CheckboxClicked(task)}
                  onClick={handleEditClick}
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

export default home;
