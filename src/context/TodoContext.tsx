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
export type TlocalStorageForm = {
  id: number;
  content: string;
  category: CategoryOfTodoFormType | null;
  isUrgent: boolean;
  isDone: boolean;
};
type FormProviderProps = {
  children: React.ReactNode;
};

type FormContextValue = {
  todoFormType: TlocalStorageForm;
  setTodoFormType: (form: TlocalStorageForm) => void;
};

const INITIAL_FORMDATA: TlocalStorageForm = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  isDone: false,
};

const FORM_CONTEXT = createContext<FormContextValue>({
  todoFormType: INITIAL_FORMDATA,
  setTodoFormType: () => {},
});

export const useFormContext = () => useContext(FORM_CONTEXT);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  // const [todoList, setTodoList] = useState<FormData[]>([]);

  const [todoFormType, setTodoFormType] = useLocalStorage<TlocalStorageForm>(
    "form-data",
    INITIAL_FORMDATA
  );

  const value = { todoFormType, setTodoFormType };

  return (
    <FORM_CONTEXT.Provider value={value}>{children}</FORM_CONTEXT.Provider>
  );
};
