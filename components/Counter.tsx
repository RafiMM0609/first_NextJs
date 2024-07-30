import React, { useState } from 'react';

interface CounterProps {
  inCount: number;
  step?: number;
}

const Counter: React.FC<CounterProps> = ({ inCount, step = 1 }) => {
  const [count, setCount] = useState<number>(inCount);

  const increment = () => setCount(prevCount => prevCount + step);
  const decrement = () => setCount(prevCount => prevCount - step);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
