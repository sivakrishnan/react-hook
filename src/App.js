import logo from './logo.svg';
import React, { useReducer } from 'react';
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
import V19CounterOne from './components/V19CounterOne';
import V20CounterTwo from './components/V20CounterTwo';
import V21CounterThree from './components/V21CounterThree';
import V22ComponentB from './components/V22ComponentB';
import V22ComponentC from './components/V22ComponentC';
import V22ComponentA from './components/V22ComponentA';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

// Video 22 useReducer with useContext
export const CountContext = React.createContext()
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }

}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <h3>---------------Video 22 useReducer with useContext -----------------------</h3>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch, test: 'test', test1: 'test1' }}>
        Counter from App.js File-{count}
        <V22ComponentA></V22ComponentA>
        <V22ComponentB></V22ComponentB>
        <V22ComponentC></V22ComponentC>

      </CountContext.Provider>

      <h3>---------------Video 21 Multiple useReducer -----------------------</h3>
      <V21CounterThree>

      </V21CounterThree>
      <h3>---------------Video 19, 20 useReducer -----------------------</h3>
      <V19CounterOne>

      </V19CounterOne>
      <V20CounterTwo>

      </V20CounterTwo>
      <h3>---------------Video 18 useReducer Introduction-----------------------</h3>
      <div>
        <h3>Introduction</h3>
        <ul>
          <li>
            useReducer is a hook, that is used for state management
          </li>
          <li>
            It is an alternative to useState
          </li>
          <li>
            useState is built using useReducer
          </li>
        </ul>




        <h3>reduce in javascript</h3>
        <ul>
          <li>1) array.reduce(reducer, initialValue)</li>
          <li>2) singleValue=reducer(accumulator, itemValue)</li>
          <li>3) reduce method returns a single value</li>
        </ul>
        <h3>useReducer in React</h3>
        <ul>
          <li>1) useReducer(reducer, initialState)</li>
          <li>2) newState=reducer(currentState, action)</li>
          <li>3) useReducer returns a pair of values. [newState, dispatch]</li>
        </ul>

      </div>

      <h3>---------------Video 15, 16, 17 useContext-----------------------</h3>
      <h4>context provides a way to pass data through the component tree without having to pass props down maunally at every level.</h4>
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
