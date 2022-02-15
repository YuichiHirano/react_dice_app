import { useState } from 'react';

const useDice = (): [string, (t: string[]) => void] => {
  const [target, setTarget] = useState('???');
  const rollDice = (candidates: string[]) => {
    const rand = Math.random();
    console.log('dice used random value=', rand);
    setTarget(candidates[Math.floor(rand * candidates.length)]);
  };

  return [target, rollDice];
};

export default useDice;
