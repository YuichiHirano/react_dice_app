import React, { FC, useState } from 'react';

const Dice: FC = () => {
  const [candidates, setCandidates] = useState<string[]>([]);
  const [candidate, setCandidate] = useState<string>('');
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

  return (
    <div className="Dice">
      <ul>
        {candidates.map((target) => (
          <li key={target}>{target}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={candidate} onChange={inputCandidate} />
        <button type="button" onClick={(e) => addCandidate(e)}>
          追加
        </button>
      </div>
      <div>
        <button type="button" onClick={rollDice}>
          ダイスを振る
        </button>
        <p>抽選結果: {target}</p>
      </div>
    </div>
  );
};

export default Dice;
