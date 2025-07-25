import logo from './logo.svg';
import './App.css';
import V2ClassCounter from './components/V2ClassCounter';
import V2HookCounter from './components/V2HookCounter';
import V3HookCounterTwo from './components/V3HookCounterTwo';
import V4HookCounterThree from './components/V4HookCounterThree';
import V5HookCounterFour from './components/V5HookCounterFour';
import V7ClassCounter from './components/V7ClassCounter';
import V7HookCounterOne from './components/V7HookCounterOne';
import V8ClassCounter from './components/V8ClassCounter';
import V8HookCounterOne from './components/V8HookCounterOne';
import V9HookMouse from './components/V9HookMouse';

function App() {
  return (
    <div className="App">


      <h3>---------------Video  9 Run Effects only one-----------------------</h3>
      <V9HookMouse>

      </V9HookMouse>
      <h3>---------------Video  8 - Conditionally run effects-----------------------</h3>
      <V8ClassCounter>

      </V8ClassCounter>
      <V8HookCounterOne>

      </V8HookCounterOne>
      <h3>---------------Video  7 - useEffect after render-----------------------</h3>
      <V7ClassCounter>

      </V7ClassCounter>
      <V7HookCounterOne>

      </V7HookCounterOne>

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
