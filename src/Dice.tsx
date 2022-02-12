import React, { VFC } from 'react';
import useDice from './hooks/useDice';

const Dice: VFC = () => {
  const [
    candidates,
    candidate,
    target,
    addCandidate,
    rollDice,
    inputCandidate,
  ] = useDice();

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
        <button type="button" onClick={rollDice}>
          ダイスを振る
        </button>
        <p>抽選結果: {target}</p>
      </div>
    </div>
  );
};

export default Dice;
