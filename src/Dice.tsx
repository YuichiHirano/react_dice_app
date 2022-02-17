import React, { VFC } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RollDice from './RollDice';
import SaveDice from './SaveDice';
import useCRUD from './hooks/useCRUD';
import useLocalStorage from './hooks/useLocalStorage';

const Dice: VFC = () => {
  const initValues: string[] = ['Alice', 'Bob', 'Charlie'];
  const [initCandidates] = useLocalStorage('candidates', initValues.join());

  const [candidates, candidate, addCandidate, deleteCandidate, inputCandidate] =
    useCRUD(
      initCandidates.split(',').length > 1
        ? initCandidates.split(',')
        : initValues,
    );

  return (
    <div className="Dice">
      <SaveDice candidates={candidates} />
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
          label="Candidate"
          variant="standard"
          value={candidate}
          onChange={inputCandidate}
        />
        <Button variant="contained" onClick={addCandidate}>
          Add
        </Button>
      </Stack>

      <br />
      <RollDice candidates={candidates} />
    </div>
  );
};

export default Dice;
