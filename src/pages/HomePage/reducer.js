import Immutable from 'immutable';
import * as constant from './constants';

const initialState = Immutable.Map({
  counter: 0
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
    default:
      return state;
  }
}

export default Home;
