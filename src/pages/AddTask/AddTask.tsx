import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./AddTask.css";
import { TlocalStorageForm, useFormContext } from "../../context/TodoContext";

const AddTask = () => {
  const {
    handleSubmit,
    addTaskFormState,
    setaddTaskFormState,
    localStorageForm,
    setLocalStorageForm,
  } = useFormContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setaddTaskFormState((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <main className="AddTask">
        <form onSubmit={handleSubmit} noValidate>
          <label>
            Sélectionnez votre catégorie* :
            <div className="AddTask__icons">
              <label htmlFor="shopping" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="shopping"
                  type="radio"
                  name="category"
                  value="🛍️"
                  required
                  checked={addTaskFormState.category === "shopping"}
                  onChange={handleChange}
                />
                🛍️
              </label>
              <label htmlFor="health" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="health"
                  type="radio"
                  name="category"
                  value="💊️"
                  required
                  checked={addTaskFormState.category === "health"}
                  onChange={handleChange}
                />
                💊️
              </label>
              <label htmlFor="work" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="work"
                  type="radio"
                  name="category"
                  value="💼"
                  required
                  checked={addTaskFormState.category === "work"}
                  onChange={handleChange}
                />
                💼
              </label>
              <label htmlFor="bills" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="bills"
                  type="radio"
                  name="category"
                  value="💸"
                  required
                  checked={addTaskFormState.category === "bills"}
                  onChange={handleChange}
                />
                💸
              </label>
              <label htmlFor="cleaning" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="cleaning"
                  type="radio"
                  name="category"
                  value="🧼"
                  required
                  checked={addTaskFormState.category === "cleaning"}
                  onChange={handleChange}
                />
                🧼
              </label>
              <label htmlFor="cleaning" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="cleaning"
                  type="radio"
                  name="category"
                  value="🤷‍♀️"
                  required
                  checked={addTaskFormState.category === "other"}
                  onChange={handleChange}
                />
                🤷‍♀️
              </label>
            </div>
          </label>
          <label>
            Quelle tâche avez vous à effectuer ?
            <textarea
              className="AddTask__textarea"
              // type="textarea"
              placeholder="Exemple : Faire les courses"
              name="content"
              required
              value={addTaskFormState.content}
              onChange={handleChange}
            />
          </label>
          <br />

          <input
            type="checkbox"
            name="isUrgent"
            checked={addTaskFormState.isUrgent}
            onChange={(event) =>
              setaddTaskFormState((prevFormData) => ({
                ...prevFormData,
                isUrgent: event.target.checked,
              }))
            }
          />
          <label>La tâche est urgente ⚠️</label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
};

export default AddTask;
