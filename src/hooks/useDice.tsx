import React, { useState } from 'react';

const useDice = (): [
  string[],
  string,
  string,
  (event: React.MouseEvent) => void,
  () => void,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [candidates, setCandidates] = useState<string[]>([]);
  const [candidate, setCandidate] = useState('');
  const [target, setTarget] = useState('???');
  const addCandidate = (event: React.MouseEvent) => {
    event.preventDefault();
    if (candidates.includes(candidate)) {
      alert(candidate + ' is Already added.');
    } else {
      setCandidates((c) => [...c, candidate]);
      setCandidate('');
    }
  };
  const rollDice = () => {
    setTarget(candidates[Math.floor(Math.random() * candidates.length)]);
  };
  const inputCandidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate(event.target.value);
  };

  return [
    candidates,
    candidate,
    target,
    addCandidate,
    rollDice,
    inputCandidate,
  ];
};

export default useDice;
