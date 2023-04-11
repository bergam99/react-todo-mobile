import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./AddTask.css";
import { FormType, useFormContext } from "../../context/TodoContext";
import { FormData } from "../../context/TodoContext";

// reset
const DEFAULT_FORM_DATA = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  doneDate: null,
};

const AddTask = () => {
  const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA);
  const [storedFormData, setStoredFormData] = useLocalStorage<FormData[]>(
    "form-data",
    []
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStoredFormData([...storedFormData, formData]);
    // reset value
    setFormData(DEFAULT_FORM_DATA);
  };

  // input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  // textarea
  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
                  checked={formData.category === "shopping"}
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
                  checked={formData.category === "health"}
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
                  checked={formData.category === "work"}
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
                  checked={formData.category === "bills"}
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
                  checked={formData.category === "cleaning"}
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
                  checked={formData.category === "other"}
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
              value={formData.content}
              onChange={handleChangeTextArea}
            />
          </label>
          <br />

          <input
            type="checkbox"
            name="isUrgent"
            checked={formData.isUrgent}
            onChange={(event) =>
              setFormData((prevFormData) => ({
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
