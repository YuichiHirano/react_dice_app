import React, { VFC } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Grid,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

import useCRUD from './hooks/useCRUD';
import useDice from './hooks/useDice';
import useLocalStorage from './hooks/useLocalStorage';

const Dice: VFC = () => {
  const initValues: string[] = ['Alice', 'Bob', 'Charlie'];
  const [initCandidates, saveCandidates, deleteCandidates] = useLocalStorage(
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
      <Grid container spacing={3} justifyContent="flex-end">
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={() => saveCandidates(candidates.join())}
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
      <List>
        {candidates.map((c) => (
          <ListItem key={c}>
            <ListItemText primary={c} />

            <Button
              onClick={() => deleteCandidate(c)}
              startIcon={<DeleteIcon />}
            />
          </ListItem>
        ))}
      </List>
      <Stack direction="row" spacing={2}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          value={candidate}
          onChange={inputCandidate}
        />
        <Button variant="contained" onClick={addCandidate}>
          Add
        </Button>
      </Stack>

      <br />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => rollDice(candidates)}>
          Roll
        </Button>
        <p>Result: {target}</p>
      </Stack>
    </div>
  );
};

export default Dice;
