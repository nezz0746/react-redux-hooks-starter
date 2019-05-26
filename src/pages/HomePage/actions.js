import * as constant from './constants';

const incrementCounter = counter => ({
  type: constant.INCREMENT_COUNTER,
  counter
});

const decrementCounter = counter => ({
  type: constant.DECREMENT_COUNTER,
  counter
});

const resetCounterLaunched = () => ({
  type: constant.RESET_COUNTER_LAUNCHED
});

const resetCounterSuccess = () => ({
  type: constant.RESET_COUNTER_SUCCESS
});

const resetCounterFailure = () => ({
  type: constant.RESET_COUNTER_FAILURE
});

export {
  incrementCounter,
  decrementCounter,
  resetCounterLaunched,
  resetCounterSuccess,
  resetCounterFailure
};
