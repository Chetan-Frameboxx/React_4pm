import React from 'react'
import Counter from './components/LearningModules/HooksComp/useStateComp/Counter'
import FetchData from './components/LearningModules/HooksComp/useEffectComp/FetchData'

function App() {
  return (
    <>
    <div className="container my-2 p-3">
        <h1 className='text-center'>App</h1>
    </div>
    <div className="container my-2 p-3 border border-3 text-bg-dark">
      <h2 className='text-center'>useState</h2>
        <Counter/>
    </div>
    <div className="container my-2 p-3 border border-3 text-bg-dark">
      <h2 className='text-center'>useEffect</h2>
        <FetchData/>
    </div>



    </>
  )
}

export default App
