import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducer from './reducer';

let middlewaresToApply = [];

if (__DEV__) {
  const createFlipperDebugger = require('redux-flipper').default;
  middlewaresToApply.push(createFlipperDebugger());
}

const middleware = applyMiddleware(...middlewaresToApply);

export default createStore(reducer, middleware);

// Store with React Native Debugger support
// const composeEnhancers = composeWithDevTools({});
// const enchancedMiddleware = composeEnhancers(middleware);
// export default createStore(reducer, enchancedMiddleware);
