import Immutable from 'immutable';
import * as constant from './constants';

const initialState = Immutable.Map({
  counter: 0,
  resetLoading: false
});

function Home(state = initialState, action) {
  switch (action.type) {
    case constant.INCREMENT_COUNTER: {
      const { counter } = action;
      return state
        .set('counter', counter + 1);
    }
    case constant.DECREMENT_COUNTER: {
      const { counter } = action;
      return state
        .set('counter', counter - 1);
    }
    case constant.RESET_COUNTER_LAUNCHED:
      return state
        .set('resetLoading', true);
    case constant.RESET_COUNTER_SUCCESS:
      return state
        .set('counter', 0)
        .set('resetLoading', false);
    case constant.RESET_COUNTER_FAILURE:
      return state
        .set('resetLoading', false);
    default:
      return state;
  }
}

export default Home;
