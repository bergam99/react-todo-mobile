// import { createContext, ReactNode, useContext } from "react";

// type TodoProviderProps = {
//   children: ReactNode;
// };

// type TodoContext = {};

// export type CategoryType =
//   | "shopping"
//   | "health"
//   | "work"
//   | "bills"
//   | "cleaning"
//   | "other";

// type TodoItem = {
//   id: number;
//   content: string;
//   category: CategoryType | null;
//   isUrgent: boolean;
//   doneDate: Date | null;
// };

// type TodoItemValue = {
//     formData: FormData;
//     setFormData: (data: FormData) => void;
// }

// const initialFormData: FormData = {content: "", category:"",  };


// const TodoContext = createContext({}as TodoContext);

// export function useTodoContext() {
//   return useContext(TodoContext);
// };

// export function TodoProvider({children} : TodoProviderProps){
    
// };

// export default TodoContext;

import { createContext, useContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export type FormType = 
| "shopping"
| "health"
| "work"
| "bills"
| "cleaning"
| "other";

export type FormData = {
  id: number;
  content: string;
  category: FormType | null;
  isUrgent: boolean;
  doneDate: Date | null;
}
type FormProviderProps = {
  children: React.ReactNode;
};


type FormContextValue = {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const initialFormData: FormData = { id:  Date.now(), content: "", category: null, isUrgent: false, doneDate: null};

const FormContext = createContext<FormContextValue>({
  formData: initialFormData,
  setFormData: () => {},
});

export const useFormContext = () => useContext(FormContext);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [todoList, setTodoList] = useState<FormData[]>([]);

  const [formData, setFormData] = useLocalStorage<FormData>(
    "form-data",
    initialFormData
  );

  const value = { formData, setFormData };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// import React, { createContext, ReactNode, useContext } from "react";

// type CategoryType =
//   | "shopping"
//   | "health"
//   | "work"
//   | "bills"
//   | "cleaning"
//   | "other";

// type TodoItem = {
//   id: number;
//   content: string;
//   category: CategoryType | null;
//   isUrgent: boolean;
//   doneDate: Date | null;
// };

// type TodoProviderProps = {
//   children: ReactNode;
// };
// type TodoContextType = {
//   todoList: TodoItem[];
//   addTodo: (todoItem: TodoItem) => void;
// };

// const TodoContext = createContext<TodoContextType>({
//   todoList: [],
//   addTodo: () => {},
// });

// export const useTodoContext = () => useContext(TodoContext);

// export const useLocalStorage = <T extends unknown>(
//   key: string,
//   initialValue: T
// ) => {
//   const [storedValue, setStoredValue] = React.useState<T>(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? (JSON.parse(item) as T) : initialValue;
//   });

//   const setValue = (value: T) => {
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };

//   return [storedValue, setValue] as const;
// };

// export const TodoContextProvider: React.FC<TodoProviderProps> = ({ children }) => {
//   const [todoList, setTodoList] = useLocalStorage<TodoItem[]>("todo-list", []);

//   const addTodo = (todoItem: TodoItem) => {
//     const [todoList, setTodoList] = useLocalStorage<TodoItem[]>("todo-list", []);
//   };

//   return (
//     <TodoContext.Provider value={{ todoList, addTodo }}>
//       {children}
//     </TodoContext.Provider>
//   );
// };

// import { createContext, useContext } from "react";
// import {TodoItem} from './TodoContext';

// type FormValuesContextType = {
//   formValues: TodoItem;
//   setFormValues: (formValues: TodoItem) => void;
// };

// const FormValuesContext = createContext<FormValuesContextType>({
//   formValues: {
//     id: 0,
//     content: "",
//     category: null,
//     isUrgent: false,
//     doneDate: null,
//   },
//   setFormValues: () => {},
// });

// export function useFormValues() {
//   return useContext(FormValuesContext);
// }

// type FormValuesProviderProps = {
//   children: React.ReactNode;
// };

// export function FormValuesProvider({ children }: FormValuesProviderProps) {
//   export const [formValues, setFormValues] = useLocalStorage<TodoItem>(
//     "formValues",
//     {
//       id: 0,
//       content: "",
//       category: null,
//       isUrgent: false,
//       doneDate: null,
//     }
//   );

//   return (
//     <FormValuesContext.Provider value={{ formValues, setFormValues }}>
//       {children}
//     </FormValuesContext.Provider>
//   );
// }