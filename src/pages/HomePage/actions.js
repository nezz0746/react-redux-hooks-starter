import * as constant from './constants';

const incrementCounter = counter => ({
  type: constant.INCREMENT_COUNTER,
  counter
});

const decrementCounter = counter => ({
  type: constant.DECREMENT_COUNTER,
  counter
});

export {
  incrementCounter,
  decrementCounter
};
