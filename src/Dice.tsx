import { FC } from 'react';

const Dice: FC = () => {
  const targets = ['1', '2', '3', '4', '5', '6'];

  return (
    <div className="Dice">
      <header>ダイス</header>
      <ul>
        {targets.map((target) => (
          <li key={target}>{target}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dice;
