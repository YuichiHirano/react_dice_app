import { VFC } from 'react';
import { Button, Stack } from '@mui/material';
import useDice from './hooks/useDice';
import useCount from './hooks/useCount';

export type RollDiceProps = {
  candidates: string[];
};

const RollDice: VFC<RollDiceProps> = (props) => {
  const [target, rollDice] = useDice();
  const [count, addCount] = useCount();

  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={() => {
          rollDice(props.candidates);
          addCount();
        }}
      >
        Roll
      </Button>
      <p>
        Result({count}): {target}
      </p>
    </Stack>
  );
};

export default RollDice;
