import { FC, useState } from 'react';

const Dice: FC = () => {
  const candidates = ['1', '2', '3', '4', '5', '6'];
  const [target, setTarget] = useState('???');
  const rollDice = () => {
    setTarget(candidates[Math.floor(Math.random() * candidates.length)]);
  };

  return (
    <div className="Dice">
      <header>ダイス</header>
      <ul>
        {candidates.map((target) => (
          <li key={target}>{target}</li>
        ))}
      </ul>
      <div>
        <button type="button" onClick={rollDice}>
          ダイスを振る
        </button>
        <p>結果: {target}</p>
      </div>
    </div>
  );
};

export default Dice;
