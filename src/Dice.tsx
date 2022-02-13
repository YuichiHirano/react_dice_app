import React, { VFC } from 'react';
import useCRUD from './hooks/useCRUD';
import useDice from './hooks/useDice';
import useLocalStorage from './hooks/useLocalStorage';

const Dice: VFC = () => {
  const initValues: string[] = [];
  const [initCandidates, saveCandidates] = useLocalStorage(
    'candidates',
    initValues.join(),
  );

  const [candidates, candidate, addCandidate, deleteCandidate, inputCandidate] =
    useCRUD(
      initCandidates.split(',').length > 1
        ? initCandidates.split(',')
        : initValues,
    );

  const [target, rollDice] = useDice();

  return (
    <div className="Dice">
      <ul>
        {candidates.map((t) => (
          <li key={t}>
            {t}
            <button type="button" onClick={() => deleteCandidate(t)}>
              ×
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input type="text" value={candidate} onChange={inputCandidate} />
        <button type="button" onClick={addCandidate}>
          Add
        </button>
      </div>
      <div>
        <button type="button" onClick={() => saveCandidates(candidates.join())}>
          Save
        </button>
      </div>
      <br />
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
