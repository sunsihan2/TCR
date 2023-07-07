import React, {useState} from 'react';
import './App.css';
import { Counter } from './Counter';
import { TdList } from './TdList';
import { VisibilityWrapper } from './VisibilityWrapper';

const CounterRender = VisibilityWrapper(Counter)
const TdListRender = VisibilityWrapper(TdList)

function App() {
  const [counterVisible, setCounterVisible] = useState(true)
  const [tdListVisible, setTdListVisible] = useState(true)

  return (
    <div className="App">
      <label>
        Counter Render
        <input type='checkbox' checked={counterVisible} onChange={(e) => setCounterVisible(e.target.checked)} />
      </label>
      <CounterRender visible={counterVisible}/>

      <label>
        To do list render
        <input type='checkbox' checked={tdListVisible} onChange={(e) => setTdListVisible(e.target.checked)}/>
      </label>
      <TdListRender visible={tdListVisible}/>
  
    </div>
  );
}

export default App;
