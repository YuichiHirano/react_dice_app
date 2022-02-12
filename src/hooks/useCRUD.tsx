import React, { useState } from 'react';

const useCRUD = (): [
  string[],
  string,
  (event: React.MouseEvent) => void,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [candidates, setCandidates] = useState<string[]>([]);
  const [candidate, setCandidate] = useState('');
  const addCandidate = (event: React.MouseEvent) => {
    event.preventDefault();
    if (candidates.includes(candidate)) {
      alert(candidate + ' is Already added.');
    } else {
      setCandidates((c) => [...c, candidate]);
      setCandidate('');
    }
  };

  const inputCandidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate(event.target.value);
  };

  return [candidates, candidate, addCandidate, inputCandidate];
};

export default useCRUD;
