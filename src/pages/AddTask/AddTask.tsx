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

  // CAT
  const CATEGORIES = [
    { picto: "🛍️", name: "🛍️" },
    { picto: "💊️", name: "💊️" },
    { picto: "💼", name: "💼" },
    { picto: "💸", name: "💸" },
    { picto: "🧼", name: "🧼" },
    { picto: "🤷‍♀️", name: "🤷‍♀️" },
  ];

  // console.log(addTaskFormState);
  return (
    <>
      <main className="AddTask">
        <form onSubmit={handleSubmit}>
          {/* ========================== ICON ======================= */}

          <p> Sélectionnez votre catégorie* :</p>
          <div className="AddTask__flex">
            {CATEGORIES.map((category, index) => (
              <div key={index} className="circle">
                <input
                  type="radio"
                  id={category.name}
                  name="category"
                  checked={addTaskFormState.category === category.name}
                  onChange={handleRadioChange}
                />
                <label className="circle-label" htmlFor={category.name}>
                  {category.picto}
                </label>
              </div>
            ))}
          </div>
          {/* ========================== TEXTAREA ======================= */}
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
          <br />
          {/* ========================== URGENT ======================= */}

          <input
            type="checkbox"
            name="isUrgent"
            checked={addTaskFormState.isUrgent}
            className="AddTask__checkbox"
            onChange={(event) =>
              setaddTaskFormState((prevFormData) => ({
                ...prevFormData,
                isUrgent: event.target.checked,
              }))
            }
          />
          <label>La tâche est urgente ⚠️</label>
          <br />
          <div className="AddTask__flex AddTask__fix">
            <button type="submit" className="AddTask__submit">
              Valider ma tâche
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddTask;

//     <!-- Not Edit mode -->
{
  /* <div class="flex fix" *ngIf="!isEditMode">
<button class="valider" type="submit" [style.opacity]="myForm.valid ? 1 : 0.5" [disabled]="!myForm.valid">
  Valider ma tâche</button>
</div>

<!-- Edit mode -->
<div class="flex fix" *ngIf="isEditMode">
<button (click)="onSave()" class="valider" type="submit" [style.opacity]="myForm.valid ? 1 : 0.5"
  [disabled]="!myForm.valid">Modifier ma tâche</button>
</div> */
}
