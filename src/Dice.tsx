import React, { VFC } from 'react';
import useCRUD from './hooks/useCRUD';
import useDice from './hooks/useDice';

const Dice: VFC = () => {
  const [candidates, candidate, addCandidate, inputCandidate] = useCRUD();

  const [target, rollDice] = useDice();

  return (
    <div className="Dice">
      <ul>
        {candidates.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={candidate} onChange={inputCandidate} />
        <button type="button" onClick={addCandidate}>
          追加
        </button>
      </div>
      <div>
        <button type="button" onClick={() => rollDice(candidates)}>
          ダイスを振る
        </button>
        <p>抽選結果: {target}</p>
      </div>
    </div>
  );
};

export default Dice;
