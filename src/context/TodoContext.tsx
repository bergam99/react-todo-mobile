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
