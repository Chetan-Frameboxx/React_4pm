import { useState } from 'react';
import Counter from '../StateComp/Counter';
import UserForm from '../StateComp/UserForm';

function TernaryExample() {
//   const [isDay, setIsDay] = useState(true);
  const [one, setOne] = useState(true);

  return (
    <div className="p-5 text-center">
      {/* <h2>{isDay ? 'Good Morning ' : 'Good Night '}</h2> */}
      {/* <button onClick={() => setIsDay(!isDay)}>Toggle Time</button> */}
      <h2>{one ? <Counter/> : <UserForm/>}</h2>
      <button onClick={() => setOne(!one)}>Toggle Counter and Form</button>
    </div>
  );
}

export default TernaryExample;