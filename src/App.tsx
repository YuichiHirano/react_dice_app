import { VFC } from 'react';
import Dice from './Dice';

const App: VFC = () => {
  return (
    <div className="App">
      <header>ダイス</header>
      <Dice />
    </div>
  );
};
export default App;
