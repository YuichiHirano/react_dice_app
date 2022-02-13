import { useState } from 'react';

const useLocalStorage = (
  key: string,
  initialValue: string,
): [string, (value: string) => void] => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ?? initialValue;
  });

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
