import logo from './logo.svg';
import React from 'react';
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
import V10MouseContainer from './components/V10MouseContainer';
import V11IntervalClassCounter from './components/V11IntervalClassCounter';
import V11IntervalHookCounter from './components/V11IntervalHookCounter';
import V12DataFetching from './components/V12DataFetching';
import V13DataFetchingGET from './components/V13DataFetchingGET';
import V14DataFetchingButton from './components/V14DataFetchingButton';
import V16ComponentC from './components/V16ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">


      <h3>---------------Video 16 useContext-----------------------</h3>
      <UserContext.Provider value={'skrish'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <V16ComponentC>

          </V16ComponentC>
        </ChannelContext.Provider>
      </UserContext.Provider>

      <h3>---------------Video  12, 13, 14 Fetching data with useEffect-----------------------</h3>

      <V14DataFetchingButton>

      </V14DataFetchingButton>
      <V13DataFetchingGET>

      </V13DataFetchingGET>
      <V12DataFetching>

      </V12DataFetching>
      <h3>---------------Video  11 useEffect with incorrect dependency-----------------------</h3>

      <V11IntervalClassCounter>

      </V11IntervalClassCounter>
      <V11IntervalHookCounter name="skrish">

      </V11IntervalHookCounter>
      <h3>---------------Video  10 useEffect with cleanup-----------------------</h3>
      <V10MouseContainer>

      </V10MouseContainer>
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
