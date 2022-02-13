import { VFC } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Dice from './Dice';

const App: VFC = () => {
  return (
    <div className="App">
      <AppBar position="relative" color="primary">
        <Toolbar>
          <strong>DICE</strong>
        </Toolbar>
      </AppBar>
      <Dice />
    </div>
  );
};
export default App;
