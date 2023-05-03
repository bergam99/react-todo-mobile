import { createContext, useContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FormProviderProps = {
  children: React.ReactNode;
};
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
  doneDate: Date | null;
};

const DEFAULT_VALUE = {
  id: Date.now(),
  content: "",
  category: null,
  isUrgent: false,
  doneDate: null,
};

type FormContextValue = {
  localStorageForm: TlocalStorageForm[];
  setLocalStorageForm: (value: TlocalStorageForm[]) => void;
  handleSubmit(event: React.FormEvent<HTMLFormElement>): void;
  addTaskFormState: TlocalStorageForm;
  setaddTaskFormState: React.Dispatch<React.SetStateAction<TlocalStorageForm>>;
  CheckboxClicked: (task: TlocalStorageForm) => void;
};

const FORM_CONTEXT = createContext<FormContextValue>({
  localStorageForm: [],
  setLocalStorageForm: () => {},
  handleSubmit: () => {},
  addTaskFormState: DEFAULT_VALUE,
  setaddTaskFormState: () => {},
  CheckboxClicked: () => {},
});

export const useFormContext = () => useContext(FORM_CONTEXT);

// ========================== CONTEXT BODY ==========================

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [addTaskFormState, setaddTaskFormState] =
    useState<TlocalStorageForm>(DEFAULT_VALUE);

  const [localStorageForm, setLocalStorageForm] = useLocalStorage<
    TlocalStorageForm[]
  >("form-data", []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      ...addTaskFormState,
    };
    setLocalStorageForm([...localStorageForm, newTask]);
    setaddTaskFormState(DEFAULT_VALUE);
  };

  const CheckboxClicked = (task: TlocalStorageForm) => {
    const updatedForm = localStorageForm.map((form) => {
      if (form.id === task.id) {
        if (form.doneDate === null) {
          // If doneDate is null, generate the current date
          const currentDate = new Date();
          return { ...form, doneDate: currentDate };
        } else {
          // If doneDate has a value, switch it to null
          if (form.id === task.id) {
            return { ...form, doneDate: null };
          }
        }
      }
      return form;
    });

    setLocalStorageForm(updatedForm);
  };

  // const CheckboxClicked = (task: TlocalStorageForm) => {
  //   if (task.doneDate === null) {
  //     // If doneDate is null, generate the current date
  //     const currentDate = new Date();
  //     task.doneDate = currentDate;
  //   } else {
  //     // If doneDate has a value, switch it to null
  //     task.doneDate = null;
  //   }

  //   // Perform any additional operations or state updates here if needed
  // };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // Generate the current date
  //   const currentDate = new Date();
  //   const formattedDate = currentDate.toISOString();
  //   // Create a new task object with the generated date
  //   const newTask = {
  //     ...addTaskFormState,
  //     doneDate: currentDate,
  //   };
  //   // Add the new task to the localStorageForm array
  //   setLocalStorageForm([...localStorageForm, newTask]);
  //   // Reset the addTaskFormState to DEFAULT_VALUE
  //   setaddTaskFormState(DEFAULT_VALUE);
  // };

  const value = {
    // states
    localStorageForm,
    setLocalStorageForm,
    addTaskFormState,
    setaddTaskFormState,
    // functions
    handleSubmit,
    CheckboxClicked,
  };
  return (
    <FORM_CONTEXT.Provider value={value}>{children}</FORM_CONTEXT.Provider>
  );
};
