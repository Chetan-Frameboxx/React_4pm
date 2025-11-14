import { useState } from 'react';

function MessageAlert() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="p-5 text-center">
      <button onClick={() => setShowMessage(!showMessage)}>Toggle Message</button>
      {showMessage && <p> You just toggled a message!</p>}
    </div>
  );
}

export default MessageAlert;