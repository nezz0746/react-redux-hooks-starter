import React from 'react';

const Counter = (props) => {
  const { counter } = props;
  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
