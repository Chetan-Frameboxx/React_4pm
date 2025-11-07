import React from 'react'
import Navbar from './Pages/Navbar'
import Greet from './component/Greet'

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
      <div className="container pt-3 mt-2 border border-2 border-danger-subtle">
        <div className="col">
          <Greet name="Aastha" onGreet={greetUser}/>
          {/* <Greet name="Sejal" onGreetNew={greetUserNew}/> */}
          <Greet name="Sejal" onGreet={greetUser}/>
          <Greet name="Hardi"/>
          <Greet name="Dharmik"/>
          <Greet name="Roshan"/>
          <Greet name="Arun"/>
          <Greet name="Rohan"/>
          <Greet name="Marshal"/>
        </div>
      </div>
    </div>
  )
}

export default App
