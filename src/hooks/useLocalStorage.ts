// import { useState } from "react";

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
// import { useState, useEffect } from "react";

// function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
//   const [value, setValue] = useState<T>(() => {
//     const item = localStorage.getItem(key);
//     return item ? (JSON.parse(item) as T) : initialValue;
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// }


import { useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
};