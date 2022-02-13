import React, { useEffect, useState } from 'react';

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
  useEffect(() => {
    setCandidates(initList);
    // disable eslint rule to compaire list
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(initList)]);

  return [candidates, candidate, addCandidate, deleteCandidate, inputCandidate];
};

export default useCRUD;
