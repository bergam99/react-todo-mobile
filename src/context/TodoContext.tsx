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
};
type FormProviderProps = {
  children: React.ReactNode;
};

type FormContextValue = {
  formData: FormData;
  setFormData: (data: FormData) => void;
};

const INITIAL_FORMDATA: FormData = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  doneDate: null,
};

const FORM_CONTEXT = createContext<FormContextValue>({
  formData: INITIAL_FORMDATA,
  setFormData: () => {},
});

export const useFormContext = () => useContext(FORM_CONTEXT);

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  // const [todoList, setTodoList] = useState<FormData[]>([]);

  const [formData, setFormData] = useLocalStorage<FormData>(
    "form-data",
    INITIAL_FORMDATA
  );

  const value = { formData, setFormData };

  return (
    <FORM_CONTEXT.Provider value={value}>{children}</FORM_CONTEXT.Provider>
  );
};
