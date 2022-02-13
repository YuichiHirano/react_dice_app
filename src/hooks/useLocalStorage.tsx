import { useEffect, useState } from 'react';

const useLocalStorage = (
  key: string,
  initialValue: string,
): [string, (value: string) => void] => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    setStoredValue(item ?? initialValue);
  }, [initialValue, key]);

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
