import React, { useState } from 'react';

const useCRUD = (
  initList: string[],
): [
  string[],
  string,
  () => void,
  (t: string) => void,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [candidates, setCandidates] = useState<string[]>(initList);
  const [candidate, setCandidate] = useState('');
  const addCandidate = () => {
    if (candidates.includes(candidate)) {
      alert(candidate + ' is Already added.');
    } else {
      setCandidates((c) => [...c, candidate]);
      setCandidate('');
    }
  };
  const deleteCandidate = (t: string) => {
    setCandidates((c) => c.filter((k) => k !== t));
  };

  const inputCandidate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCandidate(event.target.value);
  };

  return [candidates, candidate, addCandidate, deleteCandidate, inputCandidate];
};

export default useCRUD;
