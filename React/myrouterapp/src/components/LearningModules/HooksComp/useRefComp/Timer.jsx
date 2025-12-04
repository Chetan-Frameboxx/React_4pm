import { useRef } from "react";

export default function Timer() {
  const timeoutRef = useRef(null);

  const startTimer = () => {
    timeoutRef.current = setTimeout(() => {
      alert("Timer Finished");
    }, 2000);
  };

  const stopTimer = () => {
    clearTimeout(timeoutRef.current);
  };

  return (
    <div className="p-4">
      <button onClick={startTimer} className="p-2 border rounded mr-2">
        Start Timer
      </button>
      <button onClick={stopTimer} className="p-2 border rounded">
        Stop Timer
      </button>
    </div>
  );
}