/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Hide yellow box for screen cast purposes
// console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => App);
