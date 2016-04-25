import {
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_BY,
  DECREMENT_COUNTER,
  LOGOUT_USER
} from '../constants';
import { fromJS } from 'immutable';


const INITIAL_STATE = fromJS({
  count: 0,
});

function counterReducer(
  state = INITIAL_STATE, 
  action = { 
    type: '', 
    payload: {incrementBy: 1, negative: false}
  }
  ) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case INCREMENT_COUNTER_BY:
    return state.update('count', (value) => {
      const incrementValue = (action.payload.incrementBy || 1 );
      const incrementNegative = (action.payload.negative ? -1 : 1);
      return value + incrementValue * incrementNegative;
    });

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default counterReducer;
