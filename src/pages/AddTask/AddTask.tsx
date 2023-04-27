import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./AddTask.css";
// import {
//   CategoryOfTodoFormType,
//   useFormContext,
// } from "../../context/TodoContext";
import { TlocalStorageForm } from "../../context/TodoContext";

// reset
const DEFAULT_VALUE = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  isDone: false,
};

const AddTask = () => {
  // ============ form state ============
  // useState 훅을 사용하여 DEFAULT_VALUE로 초기화된 addTaskFormState 상태 변수를 정의합니다. 이 상태 변수는 사용자가 입력한 양식 데이터를 추적하는 데 사용됩니다.
  //
  const [addTaskFormState, setaddTaskFormState] =
    useState<TlocalStorageForm>(DEFAULT_VALUE);

  // ============ localStorage state ============
  // useLocalStorage 훅을 사용하여 "form-data" 키를 사용하여 로컬 스토리지에 저장되는 localStorageForm 상태 변수를 만듭니다.
  const [localStorageForm, setLocalStorageForm] = useLocalStorage<
    TlocalStorageForm[]
  >("form-data", []);

  // ============ functions ============
  // 제출 이벤트를 처리하며, localStorageForm에 새로운 작업을 추가하고 addTaskFormState를 DEFAULT_VALUE로 재설정합니다.
  // submit
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   // 기본 동작을 취소
  //   event.preventDefault();
  //   // handleSubmit 함수는 제출 이벤트를 처리합니다. event.preventDefault()를 호출하여 기본 동작을 취소하고, setLocalStorageForm을 사용하여 현재 addTaskFormState 값을 localStorageForm 배열에 추가합니다
  //   setLocalStorageForm([...localStorageForm, addTaskFormState]);
  //   // 마지막으로 setaddTaskFormState를 사용하여 addTaskFormState를 DEFAULT_VALUE로 재설정합니다.
  //   setaddTaskFormState(DEFAULT_VALUE);
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Generate the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();

    // Create a new task object with the generated date
    const newTask = {
      ...addTaskFormState,
      doneDate: formattedDate,
    };

    // Add the new task to the localStorageForm array
    setLocalStorageForm([...localStorageForm, newTask]);

    // Reset the addTaskFormState to DEFAULT_VALUE
    setaddTaskFormState(DEFAULT_VALUE);
  };

  // form
  // HTMLInputElement와 HTMLTextAreaElement를 | 연산자로 연결하여 하나의 타입으로 정의한 것은 유니온 타입(Union Type)입니다.
  // 이벤트 핸들러의 인자로 전달되는 이벤트 객체(React.ChangeEvent)는 여러 가지 타입의 요소에 사용될 수 있습니다. HTMLInputElement는 input 요소를, HTMLTextAreaElement는 textarea 요소를 나타내는 DOM 타입입니다.
  // 따라서, 이벤트 핸들러 함수의 인자 타입에 유니온 타입으로 HTMLInputElement와 HTMLTextAreaElement를 연결하면, input과 textarea 요소 모두에서 발생한 이벤트를 처리할 수 있습니다.
  // 즉, event.target이 HTMLInputElement나 HTMLTextAreaElement 중 하나일 때, 이벤트 객체의 name과 value 속성을 추출하여 setaddTaskFormState를 호출하여 addTaskFormState 값을 업데이트하는 역할을 합니다.
  // name과 value는 HTMLInputElement와 HTMLTextAreaElement의 속성입니다.

  // name은 폼 데이터에서 해당 요소의 이름을 나타내는 속성이고, value는 해당 요소의 입력 값(텍스트, 숫자, 체크박스 등)을 나타내는 속성입니다.
  // 이벤트 핸들러 함수에서 event.target은 해당 이벤트가 발생한 DOM 요소를 나타내며, 그 속성들을 가지고 있습니다. 따라서 이벤트 핸들러 함수에서 name과 value를 추출하여 폼 데이터를 업데이트할 수 있습니다.
  // 다른 이름을 사용해도 되지만, 폼 데이터와 관련된 속성이므로 일반적으로 name과 value를 사용합니다. 다른 이름을 사용하면 코드를 읽는 사람들이 혼동할 수 있으므로, 가능하면 일관성 있게 사용하는 것이 좋습니다.
  // name은 HTML 요소에서 사용되는 속성으로, 해당 요소의 이름을 정의하는 역할을 합니다. 주로 폼 요소에서 사용되며, 각각의 폼 요소마다 이름이 있어야 서버로 데이터를 전송할 때 구분할 수 있습니다.
  // value는 HTML 요소에서 사용되는 속성으로, 해당 요소의 값을 정의하는 역할을 합니다. 예를 들어, input 요소에서는 사용자가 입력한 값을 나타내며, select 요소에서는 선택한 옵션의 값을 나타냅니다.
  // React에서는 name과 value를 사용하여, 이벤트 핸들러 함수에서 이 속성들을 추출하여 폼 데이터를 업데이트할 수 있습니다. 이렇게 추출된 name과 value는 폼 데이터 객체의 프로퍼티와 값으로 사용되며, 서버로 전송할 때 이 값들이 전송됩니다.
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
