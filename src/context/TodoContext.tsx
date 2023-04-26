import { createContext, useContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
// FormType
export type CategoryOfTodoFormType =
  | "shopping"
  | "health"
  | "work"
  | "bills"
  | "cleaning"
  | "other";
// FormData
export type TodoFormType = {
  id: number;
  content: string;
  category: CategoryOfTodoFormType | null;
  isUrgent: boolean;
  doneDate: Date | null;
};
type FormProviderProps = {
  children: React.ReactNode;
};

type FormContextValue = {
  todoFormType: TodoFormType;
  setTodoFormType: (data: TodoFormType) => void;
};

const INITIAL_FORMDATA: TodoFormType = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  doneDate: null,
};

const FORM_CONTEXT = createContext<FormContextValue>({
  todoFormType: INITIAL_FORMDATA,
  setTodoFormType: () => {},
});

export const useFormContext = () => useContext(FORM_CONTEXT);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  // const [todoList, setTodoList] = useState<FormData[]>([]);

  const [todoFormType, setTodoFormType] = useLocalStorage<TodoFormType>(
    "form-data",
    INITIAL_FORMDATA
  );

  const value = { todoFormType, setTodoFormType };

  return (
    <FORM_CONTEXT.Provider value={value}>{children}</FORM_CONTEXT.Provider>
  );
};
