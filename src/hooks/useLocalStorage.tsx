import { useEffect, useState } from 'react';

const useLocalStorage = (
  key: string,
  initialValue: string,
): [string, (value: string) => void, () => void] => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    setStoredValue(item ?? initialValue);
  }, [initialValue, key]);

  const setValue = (value: string) => {
    window.localStorage.setItem(key, value);
    setStoredValue(value);
  };

  const deleteValue = () => {
    if (confirm('Are you sure you want to delete this item?')) {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    }
  };

  return [storedValue, setValue, deleteValue];
};

export default useLocalStorage;
