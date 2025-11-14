import { useState } from 'react';

function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div className="p-5 text-center">
        <h2>Welcome Back, User!</h2>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="p-5 text-center">
        <h2>Please Log In</h2>
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    );
  }
}

export default Welcome;