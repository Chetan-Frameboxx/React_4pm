import React, { useReducer } from "react";
import Counter from "./components/LearningModules/HooksComp/useStateComp/Counter";
import FetchData from "./components/LearningModules/HooksComp/useEffectComp/FetchData";
import DemoRef from "./components/LearningModules/HooksComp/useRefComp/DemoRef";
import GreatGrandParent from "./components/LearningModules/HooksComp/useContextComp/GreatGrandParent";
import CounterComp from "./components/LearningModules/HooksComp/useReducerComp/CounterComp";
import reducer from "./components/LearningModules/HooksComp/useReducerComp/reducer";

function App() {
  const [count, dispatch] = useReducer(reducer, 0);
  
  return (
    <>
      <div className="container my-2 p-3">
        <h1 className="text-center">App</h1>
      <button className='btn btn-success' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button className='btn btn-success' onClick={() => dispatch({ type: 'IncrementByFive' })}>5+</button>
      <h2>Count : {count}</h2>

      </div>
      <div className="container my-2 p-3 border border-3 text-bg-light">
        <h2 className="text-center">useReducer</h2>
        <CounterComp />
      </div>
      <div className="container my-2 p-3 border border-3 text-bg-light">
        <h2 className="text-center">useContext Api</h2>
        <GreatGrandParent />
      </div>
      <div className="container my-2 p-3 border border-3 text-bg-dark">
        <h2 className="text-center">useRef</h2>
        <DemoRef />
      </div>
      <div className="container my-2 p-3 border border-3 text-bg-dark">
        <h2 className="text-center">useEffect</h2>
        <FetchData/>
      </div>

      <div className="container my-2 p-3 border border-3 text-bg-dark">
        <h2 className="text-center">useState</h2>
        <Counter />
      </div>
    </>
  );
}

export default App;
