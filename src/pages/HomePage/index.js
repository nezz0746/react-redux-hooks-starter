import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { incrementCounter, decrementCounter } from './actions';

const ListView = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector(state => ({
    counter: state.get('Home').get('counter')
  }), shallowEqual);

  const increment = () => {
    dispatch(incrementCounter(counter));
  };

  const decrement = () => {
    dispatch(decrementCounter(counter));
  };

  return (
    <div>
      <h1>HomePage</h1>
      <p>{counter}</p>
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
};

export default ListView;
