import React from 'react';
import Counter from '../../components/Counter';

const CounterPage: React.FC = () => {
  return (
    <div>
      <h1>Counter Example</h1>
      <Counter inCount={0} step={2} />
    </div>
  );
};

export default CounterPage;
