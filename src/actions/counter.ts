import { 
  INCREMENT_COUNTER, 
  INCREMENT_COUNTER_BY, 
  DECREMENT_COUNTER 
} from '../constants';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function incrementBy(value = 1, negative = false) {
  return {
    type: INCREMENT_COUNTER_BY,
    payload: {
      incrementBy: value,
      negative: (negative === true),
    },
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}
