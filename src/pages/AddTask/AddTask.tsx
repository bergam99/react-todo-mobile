import { useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./AddTask.css";
interface FormData {
  name: string;
  email: string;
}

// export const useLocalStorage = <T extends unknown>(
//   key: string,
//   initialValue: T
// ) => {
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? (JSON.parse(item) as T) : initialValue;
//   });

//   const setValue = (value: T) => {
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };

//   return [storedValue, setValue] as const;
// };



// const TodoForm = () => {
//   const [todoItem, setTodoItem] = useState<FormData>({
//     id: 0,
//     content: "",
//     category: null,
//     isUrgent: false,
//     doneDate: null,
//   });
//   const [todoList, setTodoList] = useLocalStorage<FormData[]>("todo-list", []);

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setTodoList([...todoList, todoItem]);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setTodoItem((prevTodoItem) => ({ ...prevTodoItem, [name]: value }));
//   };

//   const handleCheckboxChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const { name, checked } = event.target;
//     setTodoItem((prevTodoItem) => ({ ...prevTodoItem, [name]: checked }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Content:
//         <input
//           type="text"
//           name="content"
//           value={todoItem.content}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Category:
//         <select name="category" value={TodoItem.category} onChange={handleChange}>
//           <option value="">Select a category</option>
//           <option value="shopping">Shopping</option>
//           <option value="health">Health</option>
//           <option value="work">Work</option>
//           <option value="bills">Bills</option>
//           <option value="cleaning">Cleaning</option>
//           <option value="other">Other</option>
//         </select>
//       </label>
//       <label>
//         Is urgent:
//         <input
//           type="checkbox"
//           name="isUrgent"
//           checked={todoItem.isUrgent}
//           onChange={handleCheckboxChange}
//         />
//       </label>
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// };




const Form = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [storedFormData, setStoredFormData] = useLocalStorage<FormData>(
    "form-data",
    { name: "", email: "" }
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStoredFormData(formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="AddTask">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
