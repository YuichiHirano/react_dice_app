import { useState } from 'react';

const useDice = (): [string, (t: string[]) => void] => {
  const [target, setTarget] = useState('???');
  const rollDice = (candidates: string[]) => {
    setTarget(candidates[Math.floor(Math.random() * candidates.length)]);
  };

  return [target, rollDice];
};

export default useDice;
