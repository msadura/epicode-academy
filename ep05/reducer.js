import {combineReducers} from 'redux';
import {
  CHANGE_BACKGROUND_COLOR,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
} from './actions';

function counter(state = 0, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + 1;
    case DECREASE_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

function backgroundColor(state = 'gray', action) {
  switch (action.type) {
    case CHANGE_BACKGROUND_COLOR:
      return action.payload.color;
    default:
      return state;
  }
}

export default combineReducers({
  backgroundColor,
  counter,
});
