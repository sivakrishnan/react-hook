import logo from './logo.svg';
import './App.css';
import V2ClassCounter from './components/V2ClassCounter';
import V2HookCounter from './components/V2HookCounter';
import V3HookCounterTwo from './components/V3HookCounterTwo';
import V4HookCounterThree from './components/V4HookCounterThree';
import V5HookCounterFour from './components/V5HookCounterFour';

function App() {
  return (
    <div className="App">

      <h3>---------------Video  5 - useState with array-----------------------</h3>
      <V5HookCounterFour>

      </V5HookCounterFour>
      <h3>---------------Video 4 - useState with object-----------------------</h3>
      <V4HookCounterThree>

      </V4HookCounterThree>
      <h3>---------------Video 3 useState Hook- with previous state-----------------------</h3>
      <V3HookCounterTwo>

      </V3HookCounterTwo>
      <h3>---------------Video 2 useState Hook-----------------------</h3>
      <V2ClassCounter>

      </V2ClassCounter>
      <V2HookCounter>

      </V2HookCounter>
    </div>
  );
}

export default App;
