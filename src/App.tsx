import { VFC } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import Dice from './Dice';

const App: VFC = () => {
  return (
    <div className="App">
      <AppBar position="relative" color="primary">
        <Toolbar>
          <strong>ダイス</strong>
        </Toolbar>
      </AppBar>
      <Dice />
    </div>
  );
};
export default App;
