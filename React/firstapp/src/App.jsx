import React from 'react'
import Navbar from './Pages/Navbar'
import Greet from './component/Greet'
import Counter from './component/StateComp/Counter';
import UserForm from './component/StateComp/UserForm';
import SimpleBtn from './component/EventComp/SimpleBtn';

function App() {

  // Custom Function 

  const greetUser =  () => {
    console.log("Hello Ji!");
  }
  // const greetUserNew =  () => {
  //   console.log("Hello Ji!");
  // }

  return (
    <div>
      <Navbar/>
      <div className="container bg-warning py-3 mt-2 border border-2 border-danger-subtle">
        <div className="col">

          {/*1. Props in React  */}

          {/* <Greet name="Aastha" onGreet={greetUser}/> */}
          {/* <Greet name="Sejal" onGreetNew={greetUserNew}/> */}
          {/* <Greet name="Sejal" onGreet={greetUser}/>
          <Greet name="Hardi"/>
          <Greet name="Dharmik"/>
          <Greet name="Roshan"/>
          <Greet name="Arun"/>
          <Greet name="Rohan"/>
          <Greet name="Marshal"/> */}


          {/*2. State In React  */}

            {/* <Counter/> */}
            {/* <hr /> */}
            {/* <UserForm/> */}


            {/* 3. Event Handling In React */}

            <SimpleBtn/>

        </div>
      </div>
    </div>
  )
}

export default App
