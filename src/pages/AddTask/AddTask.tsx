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

  return (
    <form onSubmit={handleSubmit} className="AddTask">
      <label>
        Category:
        <div>
          <label>
            <input
              type="radio"
              name="category"
              value="shopping"
              checked={formData.category === "shopping"}
              onChange={handleChange}
            />
            🛍️
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="health"
              checked={formData.category === "health"}
              onChange={handleChange}
            />
            💊️
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="work"
              checked={formData.category === "work"}
              onChange={handleChange}
            />
            💼
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="bills"
              checked={formData.category === "bills"}
              onChange={handleChange}
            />
            💸
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="cleaning"
              checked={formData.category === "cleaning"}
              onChange={handleChange}
            />
            🧼
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="other"
              checked={formData.category === "other"}
              onChange={handleChange}
            />
            🤷‍♀️
          </label>
        </div>
      </label>
      <label>
        Quelle tâche avez vous à effectuer ?
        <input
          type="textarea"
          name="content"
          value={formData.content}
          onChange={handleChange}
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
  );
};

export default AddTask;
