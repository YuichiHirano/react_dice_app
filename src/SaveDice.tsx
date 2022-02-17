import { VFC } from 'react';
import { Button, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import useLocalStorage from './hooks/useLocalStorage';

type SaveDiceProps = {
  candidates: string[];
};

const SaveDice: VFC<SaveDiceProps> = (props: SaveDiceProps) => {
  const [_, saveCandidates, deleteCandidates] = useLocalStorage(
    'candidates',
    '',
  );

  return (
    <Grid container spacing={3} justifyContent="flex-end">
      <Button
        variant="contained"
        startIcon={<SaveIcon />}
        onClick={() => saveCandidates(props.candidates.join())}
      >
        Save
      </Button>
      <Button
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={deleteCandidates}
      >
        Delete
      </Button>
    </Grid>
  );
};

export default SaveDice;
