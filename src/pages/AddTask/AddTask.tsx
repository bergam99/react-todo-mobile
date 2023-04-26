import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./AddTask.css";
import {
  CategoryOfTodoFormType,
  useFormContext,
} from "../../context/TodoContext";
import { TodoFormType } from "../../context/TodoContext";

// reset
const DEFAULT_FORM_DATA = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  doneDate: null,
};

const AddTask = () => {
  const [todoFormType, setTodoFormType] =
    useState<TodoFormType>(DEFAULT_FORM_DATA);
  const [storedFormData, setStoredFormData] = useLocalStorage<TodoFormType[]>(
    "form-data",
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStoredFormData([...storedFormData, todoFormType]);
    // reset value
    setTodoFormType(DEFAULT_FORM_DATA);
  };

  // input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodoFormType((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  // textarea
  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setTodoFormType((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <main className="AddTask">
        {" "}
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
                  checked={todoFormType.category === "shopping"}
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
                  checked={todoFormType.category === "health"}
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
                  checked={todoFormType.category === "work"}
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
                  checked={todoFormType.category === "bills"}
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
                  checked={todoFormType.category === "cleaning"}
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
                  checked={todoFormType.category === "other"}
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
              value={todoFormType.content}
              onChange={handleChangeTextArea}
            />
          </label>
          <br />

          <input
            type="checkbox"
            name="isUrgent"
            checked={todoFormType.isUrgent}
            onChange={(event) =>
              setTodoFormType((prevFormData) => ({
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
