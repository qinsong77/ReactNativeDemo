/**
 * @format
 */
import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/examples/testApp';
// import App from './src/examples/TodoList/app';
// import App from './src/examples/SectionList';
// import App from './src/examples/react_navigation/demo1';
import App from './src/examples/react_navigation/bottom_tabs_demo';
import {name as appName} from './app.json';

//下面两行是屏蔽警告
console.disableYellowBox = true ;
console.warn('YellowBox is disabled.');

AppRegistry.registerComponent(appName, () => App);
