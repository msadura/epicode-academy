export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR';

export function increaseCounter() {
  return {type: INCREASE_COUNTER};
}

export function decreaseCounter() {
  return {type: DECREASE_COUNTER};
}

export function changeBackgroundColor(color = 'silver') {
  return {type: CHANGE_BACKGROUND_COLOR, payload: {color}};
}
