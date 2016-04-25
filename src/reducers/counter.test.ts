import * as assert from 'assert';
import fireAction from '../utils/fire-action';
import counterReducer from './counter';
import { 
  INCREMENT_COUNTER, 
  INCREMENT_COUNTER_BY, 
  DECREMENT_COUNTER 
} from '../constants';
import { Map } from 'immutable';

let state = counterReducer();

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, INCREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, DECREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue - 1);
    });
  });

  describe('on INCREMENT_COUNTER_BY', () => {
    it('should increment state.count by 7', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, 
        INCREMENT_COUNTER_BY, {incrementBy: 7, negative: false});
      assert.strictEqual(state.get('count'), previousValue + 7);
    });

    it('should decrement state.count by 13', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, 
        INCREMENT_COUNTER_BY, {incrementBy: 13, negative: true});
      assert.strictEqual(state.get('count'), previousValue - 13);
    });

    it('should increment state.count by 5', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, 
        INCREMENT_COUNTER_BY, {incrementBy: 5});
      assert.strictEqual(state.get('count'), previousValue + 5);
    });

    it('should increment state.count by 1', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, INCREMENT_COUNTER_BY);
      assert.strictEqual(state.get('count'), previousValue + 1);
    });
  });
});
