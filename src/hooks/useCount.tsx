import { useState } from 'react';

const useCount = (): [string, () => void] => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return [count.toString(), increment];
};

export default useCount;
