import "./AddTask.css";
import { useFormContext } from "../../context/TodoContext";

const AddTask = () => {
  const { handleSubmit, addTaskFormState, setaddTaskFormState } =
    useFormContext();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setaddTaskFormState((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, id } = event.target;
    setaddTaskFormState((prevFormData) => ({ ...prevFormData, [name]: id }));
  };

  console.log(addTaskFormState);
  return (
    <>
      <main className="AddTask">
        <form onSubmit={handleSubmit}>
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
                  onChange={handleRadioChange}
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
                  checked={addTaskFormState.category === "health"}
                  onChange={handleRadioChange}
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
                  checked={addTaskFormState.category === "work"}
                  onChange={handleRadioChange}
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
                  checked={addTaskFormState.category === "bills"}
                  onChange={handleRadioChange}
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
                  checked={addTaskFormState.category === "cleaning"}
                  onChange={handleRadioChange}
                />
                🧼
              </label>
              <label htmlFor="other" className="AddTask__icon_label">
                <input
                  className="AddTask__icon_input"
                  id="other"
                  type="radio"
                  name="category"
                  value="🤷‍♀️"
                  checked={addTaskFormState.category === "other"}
                  onChange={handleRadioChange}
                />
                🤷‍♀️
              </label>
            </div>
          </label>
          <label>
            Quelle tâche avez vous à effectuer ?
            <textarea
              className="AddTask__textarea"
              placeholder="Exemple : Faire les courses"
              name="content"
              required
              value={addTaskFormState.content}
              onChange={handleChange}
            />
          </label>
          <br />s{" "}
          <input
            type="checkbox"
            name="isUrgent"
            checked={addTaskFormState.isUrgent}
            className="AddTask__checkbox AddTask__input"
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
